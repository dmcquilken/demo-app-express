const config = require('../config/config');
const Sequelize = require('sequelize');

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