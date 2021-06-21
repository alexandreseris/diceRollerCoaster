require('dotenv').config()
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Party extends Model {}
  Party.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    idRollSystem: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    currentNote: {
      type: DataTypes.STRING(1000),
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: true,
    indexes: [
      {
        unique: false,
        fields: ["name"]
      }
    ]
  });
  sequelize.models.RollSystem.hasMany(Party, { foreignKey: { name: "idRollSystem" } });
  Party.belongsTo(sequelize.models.RollSystem, { foreignKey: { name: "idRollSystem" } });
}