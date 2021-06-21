require('dotenv').config()
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Lang extends Model {}
  Lang.init({
    id: { // cf https://en.wikipedia.org/wiki/List_of_ISO_639-3_codes
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false
  });
}