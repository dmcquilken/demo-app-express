'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      data: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('todos'),
};