const nodemailer = require('nodemailer');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const logger = require('./logger');

let transporter = nodemailer.createTransport( config.transporterOptions );

module.exports = {
    sendEmail: (mailOptions)=> {
        return new Promise((resolve, reject)=> {
            transporter.sendMail(mailOptions, (err, info)=> {
                if (err) {
                    reject(err);
                } else {
                    logger.info('Message %s sent: %s', info.messageId, info.response);
                    resolve(info);
                }
            })
        })

    }
};
