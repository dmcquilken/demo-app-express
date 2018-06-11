const config = require('../config/config');
const router = require('express').Router();
const bodyParser = require('body-parser');
const path = require('path');
const glob = require('glob');
const db = require('./libs/sequelize');

module.exports = function(app) {

	//setup middleware:
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	//load routes:
	var routes = glob.sync('./server/routes/*.js').map((file) => {
		require('./routes/' + path.basename(file))(app);
    });

	//start server
	app.listen(config.server.port, () => {
	  console.log('Server listening on port:' + config.server.port);
	});

};