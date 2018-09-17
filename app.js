const logger = require('morgan');
const express = require('express');
const app = express();

//initialize env
if(!process.env.NODE_ENV) {
	console.log('No environment defined.  Defaulting to "development".');
	process.env.NODE_ENV = 'development';
}

//setup logging
app.use(logger(process.env.NODE_ENV));

//enable cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// init server
const server = require('./server/server')(app);