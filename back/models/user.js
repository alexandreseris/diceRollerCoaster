require('dotenv').config()
const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');

const logger = require('../logger');
const errors = require('../errors');

module.exports = (sequelize) => {
  class User extends Model {

    static async errorLabel(field) { // async cause its gonna later make calls to db for translations, gotta also change checkPasswordStrength at the same time
      let errorsList = {
        username: "Le nom d'utilisateur doit contenir entre 5 et 60 caractères",
        email: "L'email doit être valide et ne pas dépasser 255 caractères"
      }
      return errorsList[field]
    }

    static async computeHashFromPassword(passwordPlain) {
      let startTime = new Date();
      try {
        let hash = await bcrypt.hash(passwordPlain, Number(process.env.SALTROUNDS));
        if (process.env.NODE_ENV !== "production") {
          let endTime = new Date();
          logger.debug("password hashing took " + String(endTime - startTime) + "ms (salts rounds: " + process.env.SALTROUNDS + ")")
        }
        return hash
      } catch (err) {
        throw new errors.HashError({description: ["Hashage du mot de passe échoué (erreur serveur)"]}, httpCode=500, err)
      }
    }

    async compareHashToPassword(passwordPlain) {
      try {
        return await bcrypt.compare(passwordPlain, this.passwordHash);
      }
      catch (err) {
        throw new errors.HashError({description: ["Vérification du mot de passe échouée (erreur serveur)"]}, httpCode=500, err)
      }
    }

    static async checkPasswordStrength(user, passwordPlain) {
      let errorMessages = []
      if (passwordPlain.length < 20 || passwordPlain.length > 60) {
        errorMessages.push("Le mot de passe doit contenir entre 20 et 60 caractères")
      }
      let lowercasePassword = passwordPlain.toLowerCase()
      let lowercaseUsername = user.username.toLowerCase()
      let lowercaseEmail = user.email.toLowerCase()
      if (lowercasePassword.indexOf(lowercaseUsername) !== -1 || lowercaseUsername.indexOf(lowercasePassword) !== -1 ||
        lowercasePassword.indexOf(lowercaseEmail) !== -1 || lowercaseEmail.indexOf(lowercasePassword) !== -1) {
          errorMessages.push("Le mot de passe ne doit pas être contenu dans votre nom d'utilisateur ou email et vice-versa")
      }
      let regexList = [
        new RegExp("([a-z].*){2}"),
        new RegExp("([A-Z].*){2}"),
        new RegExp("([0-9].*){2}")
      ];
      for (let reg of regexList) {
        if (!passwordPlain.match(reg)) {
          errorMessages.push("Le mot de passe doit contenir au moins 2 lettres non accentuées minuscules, 2 lettres non accentuées majuscules et 2 chiffres")
          break
        }
      }
      if (errorMessages.length > 0) {
        throw new errors.ValidationError({field: "password", description: errorMessages}, 409)
      }
    }

    static async newPassword(user, passwordPlain) {
      await User.checkPasswordStrength(user, passwordPlain)
      return await User.computeHashFromPassword(passwordPlain)
    }

  }

  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [5, 60]
        }
      }
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        len: {
          args: [3, 255]
        }
      }
    },
    passwordHash: {
      type: DataTypes.STRING(80),
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: true
  });
}