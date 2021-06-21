require('dotenv').config()
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class PartyNote extends Model {}
  PartyNote.init({
    idParty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(1000),
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false
  });
  sequelize.models.idParty.hasMany(PartyNote, { foreignKey: { name: "idParty" } });
  PartyNote.belongsTo(sequelize.models.idParty, { foreignKey: { name: "idParty" } });
}