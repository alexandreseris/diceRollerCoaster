const sequelize = require('./');
const logger = require('../logger');
const errors = require('../errors')

var usrLs = [
  [{username: "Jeanjean2", email: "test3@lala.com"}, "6854sdfbsfbSFRBIVKHKHNSFDBVKH2442sfbsfbkjhjsfb"],
  // [{username: "Jeanjean2", email: "test3@lala.com"}, "6854sdfbsfbSFRBIVKHKHNSFDBVKH2442sfbsfbkjhjsfb"],
  // [{username: "Michel", email: "test@lala.com"}, "toast"],
  // [{username: "Jeanjean", email: "test2@lala.com"}, "jeanjeantestestestestest"],
  // [{username: "Jeanjeadsfbsfbn", email: "tesgvvvt2lala.com"}, "6854sdfbsfbSFRBIVKHKHNSFDBVKH2442sfbsfbkjhjsfb"]
]

async function insertFixtures () {
  logger.debug("fixture insertion start")
  await sequelize.models.User.destroy({ truncate : true })
  for (let usrParam of usrLs) {
    try {
      let pwdHashed = await sequelize.models.User.newPassword(...usrParam);
      let usrBuild = usrParam[0]
      usrBuild.passwordHash = pwdHashed
      await sequelize.models.User.create(usrBuild)
    } catch (err) {
      logger.debug(usrParam)
      logger.debug(err)
    }
  }
}

insertFixtures();
