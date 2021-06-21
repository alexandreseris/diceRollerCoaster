require('dotenv').config()
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class PartyColor extends Model {}
  PartyColor.init({
    idParty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    value: { // css format rgba(x,x,x,x)
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false
  });
  sequelize.models.idParty.hasMany(PartyColor, { foreignKey: { name: "idParty" } });
  PartyColor.belongsTo(sequelize.models.idParty, { foreignKey: { name: "idParty" } });
}