'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasOne(models.post,{foreignKey:'userId',as: 'user'})   
    }
  }
  user.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    passwordConfirm: DataTypes.STRING,
    phone: DataTypes.STRING,
    zalo: DataTypes.STRING,
    email:DataTypes.STRING,
    avatar:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};