'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Slide.init({
    organizationId: DataTypes.STRING,
    text: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Slide',
    paranoid: true
  });
  return Slide;
};