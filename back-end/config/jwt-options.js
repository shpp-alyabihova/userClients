const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const env = process.env.NODE_ENV || 'development';
const config = require('./config.json')[env];

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = config.privateKey;

module.exports = jwtOptions;