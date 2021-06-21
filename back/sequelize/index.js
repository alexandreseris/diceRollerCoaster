const { Sequelize } = require('sequelize');
var config = require('./dbConfig');
const logger = require('../logger');

let commonDbOptions = {
  dialect: process.env.DICEROLLERCOASTERSETTINGS_DB_dialect,
  define: {
    freezeTableName: true
  }
}

config[config.length - 1] = {...commonDbOptions, ...config[config.length-1]}

if (process.env.NODE_ENV !== "production") {
  logger.debug("db options are:", config)
}

var sequelize = new Sequelize(...config)


logger.debug("loading models into sequelize")
const modelDefiners = [
  require('../models/lang'),
  require('../models/translation'),
  require('../models/user'),
  require('../models/friendstatut'),
  require('../models/friendstatuttranslation'),
  // require('../models/user_friend'),
  // require('../models/rollsystem'),
  // require('../models/rollsystemtranslation'),
  // require('../models/party'),
  // require('../models/partycolor'),
  // require('../models/partynote'),
  // require('../models/partypoint'),
  // require('../models/partystatistic'),
  // require('../models/partycharacternote'),
  // require('../models/user_party'),
  // require('../models/character'),
  // require('../models/equipment'),
  // require('../models/point'),
  // require('../models/statistic'),
  // require('../models/characternote'),
  // require('../models/chat'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}


module.exports = sequelize;
