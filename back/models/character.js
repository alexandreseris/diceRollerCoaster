require('dotenv').config()
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Character extends Model {}
  Character.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    timestamps: false
  });
  sequelize.models.User.hasMany(Character, { foreignKey: { name: "idUser" } });
  Character.belongsTo(sequelize.models.User, { foreignKey: { name: "idUser" } });
}