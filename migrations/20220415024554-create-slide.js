'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Slides', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            text: {
                type: Sequelize.STRING,
                allowNull: false
            },
            imageUrl: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            order: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true
            },
            deletedAt: {
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

        await queryInterface.addColumn(
            'Slide',
            'organizationId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Organization',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Slides');
        await queryInterface.removeColumn(
            'Slides',
            'organizationId'
        )
    }
};
