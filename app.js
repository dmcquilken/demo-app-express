const config = require('./config/config');
const logger = require('morgan');
const express = require('express');

const app = express();

//setup logging
app.use(logger('development'));

//init server
const server = require('./server/server')(app);