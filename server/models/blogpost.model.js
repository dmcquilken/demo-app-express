'use strict';

module.exports = function(sequelize, DataTypes) {

  var BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return BlogPost;
};