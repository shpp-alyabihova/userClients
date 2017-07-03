'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const log = require('./helpers/logger.js');
const path = require('path');
const cors = require('cors');
const env = process.env.NODE_ENV || 'development';




const passport = require('passport');
const jwtStrategy = require('./helpers/jwt-strategy.js');

const config = require('./config/config.json')[env];
const port = config.port;

const auth = require('./routes/auth');
const users = require('./routes/users');
const clients = require('./routes/clients');


passport.use(jwtStrategy);

const app = express();
app.use(passport.initialize());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.use(express.static(path.join(__dirname, 'public/dist')));

app.use('/users', users);
app.use('/clients', clients);
app.use('/auth', auth);



app.listen(port, function () {
    log.info('Running on http://localhost:' + port);
});
