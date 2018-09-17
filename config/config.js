'use strict';

const glob = require('glob');
const path = require('path');
const _ = require('underscore');

const config = require('./globals');
var env = envHandler();
var envConfig = {};

glob.sync('./config/' + env + '.json').map((file) => {

	envConfig = require('./' + path.basename(file));
	_.extend(config, envConfig);

});

function envHandler() {

	if (!process.env.NODE_ENV) {
		process.env.NODE_ENV = 'development';
		return process.env.NODE_ENV;
	}
	else
		return process.env.NODE_ENV;

};

module.exports = config;