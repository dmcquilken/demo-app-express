'use strict';

module.exports = function(sequelize, DataTypes) {

  var ToDo = sequelize.define('todos', {
  	id: {
  		type: DataTypes.UUID,
  		primaryKey: true
  	},
    data: DataTypes.JSON
  }, {
  	timestamps: false,
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return ToDo;
};