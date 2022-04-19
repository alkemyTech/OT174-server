'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const alias = "Organization";
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
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    welcomeText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    aboutUsText: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }
  const config = {
    tableName: "organization",
    timestamps: true,
    softDelete: true
  }
  const Organization = sequelize.define(alias, cols, config);
  return Organization;
};