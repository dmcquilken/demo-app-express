'use strict';

const config = require('../config/config');
const glob = require('glob');
const Sequelize = require('sequelize');
const path = require('path');
const db = {};

const sequelize = new Sequelize(config.datasource.dbname, config.datasource.username, config.datasource.password, {
  host: config.datasource.host,
  dialect: config.datasource.dialect,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

glob.sync('./server/models/*.js').map((file) => {

    var model = sequelize['import'](path.join('./models/', path.basename(file)));
    db[model.name] = model;

});

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

