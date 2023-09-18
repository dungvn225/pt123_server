'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class overview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      overview.hasOne(models.post,{foreignKey:'overViewId',as:'overview'})
    }
  }
  overview.init({
    code: DataTypes.STRING,
    area: DataTypes.STRING,
    type: DataTypes.STRING,
    target: DataTypes.STRING,
    created: DataTypes.STRING,
    expire: DataTypes.STRING,
    bonus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'overview',
  });
  return overview;
};