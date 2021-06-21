require('dotenv').config()
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Translation extends Model {}
  Translation.init({
    idLang: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false
  });
  sequelize.models.Lang.hasMany(Translation, { foreignKey: { name: "idLang" } });
  Translation.belongsTo(sequelize.models.Lang, { foreignKey: { name: "idLang" } });
}