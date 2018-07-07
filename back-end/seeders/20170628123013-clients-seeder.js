'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('clients', [
            {
                name: 'first client',
                description: 'client of the first user',
                vat_number: 12345678908,
                city: 'City',
                province: 'Province',
                country: 'Country',
                user_id: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'client second',
                description: 'client of the first user',
                vat_number: 66444322132,
                city: 'City',
                province: 'Province',
                country: 'Country',
                user_id: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'client third',
                description: 'client of the first user',
                vat_number: 11122233344,
                city: 'City',
                province: 'Province',
                country: 'Country',
                user_id: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'client fourth',
                description: 'client of the second user',
                vat_number: 98765432123,
                city: 'City',
                province: 'Province',
                country: 'Country',
                user_id: 2,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'client fifth',
                description: 'client of the second user',
                vat_number: 37474854238,
                city: 'City',
                province: 'Province',
                country: 'Country',
                user_id: 2,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'client sixth',
                description: 'client of the third user',
                vat_number: 63523131121,
                city: 'City',
                province: 'Province',
                country: 'Country',
                user_id: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'client seventh',
                description: 'client of the third user',
                vat_number: 45344513134,
                city: 'City',
                province: 'Province',
                country: 'Country',
                user_id: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                name: 'client eighth',
                description: 'client of the third user',
                vat_number: 23397654324,
                city: 'City',
                province: 'Province',
                country: 'Country',
                user_id: 3,
                created_at: new Date(),
                updated_at: new Date()
            },
        ], {});
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('clients', null, {});
    }
};
