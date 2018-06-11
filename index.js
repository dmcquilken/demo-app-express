const config = require('./config/config');
const app = require('express')();
const router = require('express').Router();
const glob = require('glob');

const db = require('./libs/sequelize');

//load routes
var routes = glob.sync("./routes/*.js", {}).map((file) => {
	require(file)(app);
    });


app.listen(config.server.port, () => {
  console.log('Server listening on port:' + config.server.port);
});
