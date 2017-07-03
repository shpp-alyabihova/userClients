const express = require('express');
const router = express.Router();
const passport = require('passport');
const Client = require('../models').Client;

const sendResponse = require('../helpers/send-response.js');
const logger = require('../helpers/logger');

router.use(passport.authenticate('jwt', { session: false }));


router.get('/:id', (req, res) => {
    if (+req.params.id !== req.user.id) {
        return sendResponse.error(res, 403, {error: {message: "You do not have access to the list of this user clients"}});
    }
    Client.findAll({ where: { user_id: req.user.id } })
        .then(clients => {
            sendResponse.success(res, { data: clients });
        })
        .catch(err => {
            logger.error(err);
            sendResponse.error(res, 500, {error: {message: err && err.message}});
    });
});

module.exports = router;