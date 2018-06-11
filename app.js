const config = require('./config/config');
const logger = require('morgan');
const express = require('express');

const app = express();

//initialize env
if(!process.env.NODE_ENV) {
	console.log('No environment defined.  Defaulting to "development"');
	process.env.NODE_ENV == 'development';
}

//setup logging
app.use(logger(process.env.NODE_ENV));

//init server
const server = require('./server/server')(app);