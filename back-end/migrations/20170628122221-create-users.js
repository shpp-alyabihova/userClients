'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(11).UNSIGNED
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            first_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            last_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password_reset_token: {
                type: Sequelize.STRING,
                defaultValue: null,
                unique: true
            },
            password_reset_at: {
                type: Sequelize.DATE,
                defaultValue: null
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
        return queryInterface.dropTable('users');
    }
};