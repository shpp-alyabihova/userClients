const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const User = require('../models').User;

const sendResponse = require('../helpers/send-response.js');
const emailSender = require('../helpers/email-sender.js');
const generateId = require('../helpers/id-generator.js');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const createToken = require('../helpers/jwt-token');
const logger = require('../helpers/logger');


router.post('/login', (req, res) => {
    console.log('Body: ', req.body);
    const { username, password } = req.body;
    console.log('password: ', password);

    User.find({ where: { username: username } })
        .then(user => {
            if (!user) {
                throw Error('Wrong username');
            }
            if (user.password === crypto.createHash('sha256').update(req.body.password).digest('hex')) {
                sendResponse.success(res, { data: createToken(user.id) });
            } else {
                sendResponse.error(res, 401, { error: {message:"passwords did not match"} });
            }
        })
        .catch(error => {
            logger.error(error);
            const message = error && error.message;
            sendResponse.error(res, 404, { error: {message: message} });
        });
});



router.post('/register', function(req, res) {
    const { username, email, password, firstName, lastName } = req.body;
    User.create({
            username: username,
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName
        })
        .then(user => {
            sendResponse.success(res, { data: createToken(user.id) });
        })
        .catch(err => {
            const message = error && error.message;
            sendResponse.error(res, 422, { error: {message: message} });
    });
});


router.get('/reset-password/:link', (req, res)=> {
    let link = req.params.link;
    console.log("LINK: ", link);
    User.find({ where: { password_reset_token: link } })
        .then(user => {
            if (!user) {
                throw Error('Wrong link');
            }
            let currentDate = new Date().getTime()/1000;
            if (user.password_reset_at.getTime()/1000 + 3600 < currentDate) {
                throw Error('Deprecated link');
            }
            return user;
        })
        .then(user => {
            sendResponse.success(res, { data: { email: user.email } });
        })
        .catch(err => {
            logger.error(err);
            let message = err && err.message;
            let code = (message === "Wrong link") ? 403 : (message === 'Deprecated link') ? 400 : 500;
            sendResponse.error(res, code, { error: {message: message} });
        });
});

router.post("/reset-password", (req, res)=> {
    const { email } = req.body;
    console.log('Email: ', email);
    User.find({ where: { email: email } })
        .then(user => {
            if (!user) {
                throw Error('Wrong email');
            }
            user.password_reset_token = generateId();
            user.password_reset_at = new Date();
            return user.save();
        })
        .then(user => {
            let mailOptions = {
                from: config.mailOptions.from,
                to: user.email,
                subject: 'reset password',
                text: `follow this link for reset your password http://localhost:4400/authentification/reset-password/${user.password_reset_token}`};
            return emailSender.sendEmail(mailOptions);
        })
        .then((info)=> {
            console.log('Send email', info.messageId, info.response);
            sendResponse.success(res, {});
        })
        .catch((err)=> {
            logger.error(err);
            let message = err && err.message;
            let code = (message === "Wrong email") ? 402 : 500;
            sendResponse.error(res, code,  { error: {message: message} });
        });

});


router.put('/reset-password/:link', (req, res)=> {
    console.log('---------------------------reset-password PUT --------------------------');
    let link = req.params.link;
    console.log("LINK: ", link);

    User.find({ where: { password_reset_token: link } })
        .then(user => {
            if (!user) {
                throw Error('Wrong link');
            }
            let currentDate = new Date().getTime()/1000;
            if (user.password_reset_at.getTime()/1000 + 3600 < currentDate) {
                throw Error('Deprecated link');
            }
            if (req.body.email !== user.email) {
                throw Error('Wrong email');
            }
            user.password = req.body.password;
            user.password_reset_at = null;
            user.password_reset_token = null;
            return user.save()
        })
        .then(user => {
            sendResponse.success(res, { data: { token: createToken(user.id) } });
        })
        .catch(err => {
            logger.error(err);
            let message = err && err.message;
            let code = (message === "Wrong link" || message === "Wrong email") ? 403 : (message === 'Deprecated link') ? 400 : 500;
            sendResponse.error(res, code,  { error: {message: message} });
        });
});

module.exports = router;
