'use strict';

const crypto = require('crypto');

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [
            {
                username: 'firstUser',
                password: crypto.createHash('sha256').update('qwerty').digest('hex'),
                email: 'alex@mail.ru',
                first_name: 'Alex',
                last_name: 'First',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                username: 'secondUser',
                password: crypto.createHash('sha256').update('qwerty').digest('hex'),
                email: 'al@gmail.com',
                first_name: 'Alex',
                last_name: 'Second',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                username: 'thirdUser',
                password: crypto.createHash('sha256').update('qwerty').digest('hex'),
                email: 'labal@gmail.com',
                first_name: 'Alex',
                last_name: 'Third',
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {});
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, {});
    }
};
