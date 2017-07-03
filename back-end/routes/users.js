const express = require('express');
const router = express.Router();

const User = require('../models').User;
const passport = require('passport');
const sendResponse = require('../helpers/send-response.js');
const logger = require('../helpers/logger');


router.use(passport.authenticate('jwt', { session: false }));

router.get('/', (req, res) => {
    User.findAll({})
        .then(users => {
            sendResponse.success(res, { data: users });
        })
        .catch(err => {
            logger.error(err);
            sendResponse.error(res, 500, {message: err && err.message});
    });
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id).then(user => {
        sendResponse.success(res, { data: user });
    }).catch(err => {
        logger.error(err);
        sendResponse.error(res, 404, {message: err && err.message});
    });
});

router.put('/:id', (req, res) => {
    User.find({ where: { id: req.params.id } })
        .then(user => {
            return user.updateAttributes( req.body )
        })
        .then(user => {
            sendResponse.success(res, { data: user });
        })
        .catch(err => {
            logger.error(err);
            sendResponse.error(res, 500, {message: err && err.message});
        });
});

router.delete('/:id', (req, res) => {
    User.destroy({ where: { id: req.params.id } })
        .then(() => {
            sendResponse.success(res, {})
        })
        .catch(err => {
            logger.error(err);
            sendResponse.error(res, 500, {message: err && err.message});
        });
});


module.exports = router;
