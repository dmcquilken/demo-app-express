'use strict';

module.exports = function(sequelize, DataTypes) {

  var ToDo = sequelize.define('todo', {
  	id: {
  		type: DataTypes.UUID,
  		primaryKey: true
  	},
    data: DataTypes.STRING
  }, {
    
  	timestamps: false,
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return ToDo;
};