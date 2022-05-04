'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('organization', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phone: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      welcomeText: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      aboutUsText: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('organization');
  }
};