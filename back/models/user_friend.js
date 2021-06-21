require('dotenv').config()
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class User_Friend extends Model {}
  User_Friend.init({
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idFriend: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idFriendStatut: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    sequelize,
    timestamps: false
  });
  sequelize.models.User.hasMany(User_Friend, { foreignKey: { name: "idUser" } });
  User_Friend.belongsTo(sequelize.models.User, { foreignKey: { name: "idUser" } });

  sequelize.models.User.hasMany(User_Friend, { foreignKey: { name: "idFriend" } });
  User_Friend.belongsTo(sequelize.models.User, { foreignKey: { name: "idFriend" } });

  sequelize.models.FriendStatut.hasMany(User_Friend, { foreignKey: { name: "idFriendStatut" } });
  User_Friend.belongsTo(sequelize.models.FriendStatut, { foreignKey: { name: "idFriendStatut" } });
}