module.exports = function(passport) {
  const express = require('express');
  const sequelizeLib = require('sequelize');


  const logger = require('../logger');
  const errors = require('../errors');
  const sequelize = require('../sequelize');
  const flashMessageTypes = require("../flashMessageTypes");


  const router = express.Router();

  const homePageActiveFormTypes = {
    LOGIN: "login",
    NEWUSER: "newuser",
  }

  router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      res.redirect("/finalstage")
    } else {
      res.render('home', {
        loginError: req.flash(flashMessageTypes.LOGINERROR),
        loginInfo: req.flash(flashMessageTypes.LOGININFO),
        newuserError: req.flash(flashMessageTypes.NEWUSERERROR),
        newuserInfo: req.flash(flashMessageTypes.NEWUSERINFO),
        homePageActiveFormTypes,
        homePageActiveForm : req.session.homePageActiveForm !== undefined ? req.session.homePageActiveForm : homePageActiveFormTypes.LOGIN
      })
    }
  });

  router.post('/loginverify', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        req.flash(info.type, info.message)
        req.session.homePageActiveForm = homePageActiveFormTypes.LOGIN
        return res.redirect("/")
      }
      if (!user) {
        req.flash(info.type, info.message)
        req.session.homePageActiveForm = homePageActiveFormTypes.LOGIN
        return res.redirect("/")
      }
      req.logIn(user, function(err) {
        if (err) {
          req.flash(info.type, info.message)
          req.session.homePageActiveForm = homePageActiveFormTypes.LOGIN
          return res.redirect("/")
        }
        return res.redirect("/finalstage")
      })
    })(req, res, next)
  })

  router.get('/finalstage', (req, res) => {
    if (req.isAuthenticated()) {
      res.render('finalStage', {username: req.user.username})
    } else {
      res.redirect("/")
    }
  });

  router.post('/newuser', async (req, res) => {
    try {
      if (typeof req.body.username === 'string' && typeof req.body.password === 'string' && typeof req.body.email === 'string') {
        let usr = {username: req.body.username, email: req.body.email}
        let pwdHashed = await sequelize.models.User.newPassword(usr, req.body.password);
        usr.passwordHash = pwdHashed
        try {
          await sequelize.models.User.create(usr)
        } catch (err) {
          if (err instanceof sequelizeLib.ValidationError) { // must be a better way :|
            let errField = err.errors[0].path
            let errMess = await sequelize.models.User.errorLabel(errField)
            throw new errors.ValidationError({description: [errMess]}, httpCode=409, err)
          }
        }
        req.flash(flashMessageTypes.NEWUSERINFO, "Utilisateur crée avec succès, merci de vous connecter")
        req.session.homePageActiveForm = homePageActiveFormTypes.LOGIN
        res.redirect("/");
      } else {
        throw new errors.ValidationError({description: ["Champs obligatoire(s) manquant(s)"]}, httpCode=401)
      }
    } catch (err) {
      let dataErr
      if (!(err instanceof errors.DatabaseError || err instanceof errors.UserError)) {
        logger.error(err)
        dataErr = {description: ["Erreur serveur, merci de ressayer"]}
      } else {
        dataErr = err.data
        logger.warn(err)
      }
      req.flash(flashMessageTypes.NEWUSERERROR, dataErr.description)
      req.session.homePageActiveForm = homePageActiveFormTypes.NEWUSER
      res.redirect("/");
    }
  });

  return router
}