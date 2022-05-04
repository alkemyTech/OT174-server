'use strict';
module.exports = (sequelize, DataTypes) => {
  const alias = "News";
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    };
  const config = {
    tableName: "news",
    timestamps: true,
    softDelete: true
  }
  const News = sequelize.define(alias, cols, config);

News.associate = function(models) {
  News.belongsTo(models.Categories, {
    as: "category",
    foreignKey: "categoryId"
  });
}

  return news;
};