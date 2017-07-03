
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const jwt = require('jsonwebtoken');
const jwtOptions = require('../config/jwt-options.js');

module.exports = (id) => {
    let payload = {id: id};
    let token = jwt.sign(payload, jwtOptions.secretOrKey);
    return {token: token};
};