const passportJwt = require('passport-jwt');
const User = require('../models').User;
const logger = require('./logger');


const JwtStrategy = passportJwt.Strategy;


const jwtOptions = require('../config/jwt-options.js');

module.exports = new JwtStrategy(jwtOptions, (jwt_payload, next)=> {
    User
        .find({ where: { id: jwt_payload.id } })
        .then((user)=> {
            next(null, user);
        })
        .catch((err)=>{
            logger.error(err && err.message);
            next(null, false);
        });
});