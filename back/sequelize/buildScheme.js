const sequelize = require('./');
const logger = require('../logger');

async function buildScheme () {
  logger.debug("scheme bulding")
  for (const [modelName, model] of Object.entries(sequelize.models)) {
    logger.debug(modelName)
    await model.sync({ force: true });
  }
}

buildScheme();
