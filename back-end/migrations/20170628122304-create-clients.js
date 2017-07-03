'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('clients', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(11).UNSIGNED
            },
            user_id: {
                allowNull: false,
                type: Sequelize.INTEGER(11).UNSIGNED
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true
            },
            vat_number: {
                type: Sequelize.INTEGER(11).UNSIGNED,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: true
            },
            province: {
                type: Sequelize.STRING,
                allowNull: true
            },
            country: {
                type: Sequelize.STRING,
                allowNull: true
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                default: new Date()
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                default: new Date()
            }
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('clients');
    }
};