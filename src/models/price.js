'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  price.init({
    order:DataTypes.INTEGER,
    code: DataTypes.STRING,
    value: DataTypes.STRING,
  
   
  }, {
    sequelize,
    modelName: 'price',
  });
  return price;
};