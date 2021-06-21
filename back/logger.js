require('dotenv').config()
const logger = require('console-log-level')({
  prefix: function(level) {
    return "[" + level.toUpperCase() + "] :: " + new Date().toISOString() + " ::"
  },
  level: process.env.LOGLEVEL
});

module.exports = logger;