'use strict';
module.exports = (sequelize, DataTypes) => {
  const alias = "User";
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    firstName: {
      type:DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    roleId: {
      type: DataTypes.INTEGER
    },
    deletedAt: DataTypes.DATE
  }
  const config = {
    tableName: "users",
    timestamps: true,
    softDelete: true
  }
  const User = sequelize.define(alias, cols, config);
  
  User.associate = function(models) {
    User.belongsTo(models.Role, {
      as: "role",
      foreignKey: "roleId"
    });
    
  }

  return User;
};