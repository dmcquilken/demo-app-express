// var models = require('../models/blogpost.model.js');
const blogpost = require('../sequelize').blog_posts;

module.exports = {
	
	getAll: function(req, res) {

		return blogpost
			.all()
			.then(blogpost => res.status(200).send(blogpost))
			.catch(error => res.status(400).send(error));

	},

	getById: function(req, res) {

		

	}


}