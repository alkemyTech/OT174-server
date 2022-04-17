'use strict';
module.exports = (sequelize, DataTypes) => {
  const alias = "Role";
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
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }
  const config = {
    tableName: "roles",
    timestamps: true
  };
  const Role = sequelize.define(alias, cols, config);
  Role.associate = function(models) {
    Role.hasMany(models.User, {
      as: "users",
      foreignKey: "roleId"
    });
  }
  return Role;
};