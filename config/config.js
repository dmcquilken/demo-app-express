'use strict';

const glob = require('glob');
const path = require('path');
const _ = require('underscore');

const config = require('./globals');
var env = {};

// console.log(path.join(process.env.NODE_ENV + '.json'));
glob.sync('./config/' + process.env.NODE_ENV + '.json').map((file) => {

	env = require('./' + path.basename(file));
	_.extend(config, env);

});

module.exports = config;