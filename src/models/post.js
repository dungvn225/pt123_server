'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      post.belongsTo(models.image,{foreignKey:'imagesId',targetKey:'id',as: 'images'})  
      post.belongsTo(models.attribute,{foreignKey:'attributesId',targetKey:'id',as: 'attributes'})  
      post.belongsTo(models.user,{foreignKey:'userId',targetKey:'id',as: 'user'})  
      post.belongsTo(models.overview,{foreignKey:'overViewId',targetKey:'id',as:'overview'})
    }
  }
  post.init({
    title: DataTypes.STRING,
    star:DataTypes.STRING,
    labelCode: DataTypes.STRING,
    address: DataTypes.STRING,
    attributesId: DataTypes.STRING,
    categoryCode: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.STRING,
    overViewId: DataTypes.STRING,
    imagesId: DataTypes.STRING,
    priceCode: DataTypes.STRING,
    areaCode: DataTypes.STRING,
    provinceCode: DataTypes.STRING,
    priceNumber:DataTypes.FLOAT,
    areaNumber:DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};