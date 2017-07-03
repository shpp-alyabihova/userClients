const getMessageByHTTPCode = require('../config/code-messages.js');

module.exports = {
    success: (res, data, code = 200)=> {
        res.setHeader('Content-Type', 'application/json');
        res.status(code).json(data);
        res.end();
    },

    error: (res, code, data, message)=> {
        message = message || getMessageByHTTPCode(code);
        res.statusMessage = message;
        res.setHeader('Content-Type', 'application/json');
        res.status(code).json(data);
        res.end();
    }
};

