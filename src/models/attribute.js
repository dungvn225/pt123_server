'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class attribute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      attribute.hasOne(models.post,{foreignKey:'attributesId',as:'attributes'})   
    }
  }
  attribute.init({
    price: DataTypes.STRING,
    acreage: DataTypes.STRING,
    published: DataTypes.STRING,
    hashtag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'attribute',
  });
  return attribute;
};