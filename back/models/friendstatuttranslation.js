require('dotenv').config()
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class FriendStatutTranslation extends Model {}
  FriendStatutTranslation.init({
    idFriendStatut: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    idLang: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false
  });
  sequelize.models.FriendStatut.hasMany(FriendStatutTranslation, { foreignKey: { name: "idFriendStatut" } });
  FriendStatutTranslation.belongsTo(sequelize.models.FriendStatut, { foreignKey: { name: "idFriendStatut" } });
  sequelize.models.Lang.hasMany(FriendStatutTranslation, { foreignKey: { name: "idLang" } });
  FriendStatutTranslation.belongsTo(sequelize.models.Lang, { foreignKey: { name: "idLang" } });
}