require('dotenv').config()
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class RollSystemTranslation extends Model {}
  RollSystemTranslation.init({
    idRollSystem: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    idLang: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false
  });
  sequelize.models.RollSystem.hasMany(RollSystemTranslation, { foreignKey: { name: "idRollSystem" } });
  RollSystemTranslation.belongsTo(sequelize.models.RollSystem, { foreignKey: { name: "idRollSystem" } });

  sequelize.models.Lang.hasMany(RollSystemTranslation, { foreignKey: { name: "idLang" } });
  RollSystemTranslation.belongsTo(sequelize.models.Lang, { foreignKey: { name: "idLang" } });
}