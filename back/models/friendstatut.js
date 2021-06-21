require('dotenv').config()
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class FriendStatut extends Model {}
  FriendStatut.init({
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true
    }
  }, {
    sequelize,
    timestamps: false
  });
}