require('dotenv').config()

const express = require('express');

const morgan = require('morgan')
const rfs = require('rotating-file-stream')
const path = require('path')

const querystring = require('querystring');

const session = require('express-session')
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');


const logger = require('./logger');
const publicRoutes = require('./routers/public');
const sequelize = require('./sequelize')
const flashMessageTypes = require("./flashMessageTypes");

const app = express();

logger.debug("environnment:", app.get("env"))

let sequelizeStore = new SequelizeStore({
  db: sequelize
})

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: sequelizeStore,
    unset: 'keep',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000, // 1h in ms
      httpOnly: true,
      sameSite: true,
      secure: app.get("env") === "production" ? true : false
    }
  })
)

sequelizeStore.sync();

app.set('view engine', 'ejs');
app.use(express.static("public"));

if (app.get("env") === "production") {
  var err4LogStream = rfs.createStream(
    'err4Log.log',
    {size: "500K", path: path.join(__dirname, 'logs'),maxFiles: 3}
  )
  app.use(morgan("combined", {
    skip: function (req, res) { return res.statusCode < 400 || res.statusCode > 500},
    stream: err4LogStream
  }),
  )
  var err5LogStream = rfs.createStream(
    'err5Log.log',
    {size: "500K", path: path.join(__dirname, 'logs'), maxFiles: 3}
  )
  app.use(morgan("combined", {
    skip: function (req, res) { return res.statusCode < 500 },
    stream: err5LogStream
  })
  )
} else {
  const devSettings = require("./devSettings")
  app.use(morgan(devSettings.morganLogFormat, {
    skip: function (req, res) { return res.statusCode < 400 || req.path === '/favicon.ico' },
  }),
  )
}


app.use(express.raw({type: ["application/json", "application/x-www-form-urlencoded"]}));

app.use(function(req, res, next) {
  if (req.method === "POST") {
    try {
      let parser
      let contentType = req.get("content-type")
      if (contentType === "application/json") {
        parser = JSON.parse
      } else if (contentType === "application/x-www-form-urlencoded") {
        parser = querystring.parse
      } else {
        throw new Error("unknown mime type: " + contentType)
      }
      req.body = parser(req.body.toString())
      next();
    } catch (err) {
      logger.error(err)
      res.status(409).json({description: ["Requête non valide"]})
    }
  } else {
    next()
  }
})

/* test cases:
wrong synthax: 409
wrong mime type: 409
wrong content length: 400 (which middleware handle with the request??? seems like none of them)
*/


app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
  },
  async function(username, password, done) {
    try {
      let user = await sequelize.models.User.findOne({ where: { username } })
      if (user === null) {
        logger.debug(`user ${username} not found`)
        return done(null, false, { type: flashMessageTypes.LOGINERROR, message: 'Utilisateur inexistant ou mot de passe incorrect' });
      }
      if (! await user.compareHashToPassword(password)) {
        logger.debug(`user ${username} failled password authentification`)
        return done(null, false, { type: flashMessageTypes.LOGINERROR, message: 'Utilisateur inexistant ou mot de passe incorrect' });
      }
      return done(null, user);
    } catch (err) {
      logger.error(err)
      return done(err, false, { type: flashMessageTypes.LOGINERROR, message: 'Erreur serveur, merci de réessayer' });
    }
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  try {
    let user = await sequelize.models.User.findOne({ where: { id } })
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});


app.use('/', publicRoutes(passport));


app.use(function(req, res, next) {
  res.status(404).send('Page non trouvée');
});

module.exports = app;
