'use strict';

module.exports = function(sequelize, DataTypes) {

  var BlogPost = sequelize.define('blog_posts', {
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
  return BlogPost;
};