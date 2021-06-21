const logger = require('../logger');

// refer to https://sequelize.org/master/manual/getting-started.html to modify this variable
// as its content will be unpacked into the sequelize constructor

const fullDebug = false;

let config = [
  {
    dialect: 'sqlite',
    storage: './database.db',
    logQueryParameters: fullDebug ,
    benchmark: fullDebug,
    logging: fullDebug ? msg => logger.debug(msg) : undefined

  }
]

module.exports = config;