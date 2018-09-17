const todo = require('../sequelize').todo;

module.exports = {
	
	getAll: function(req, res) {

		return todo
			.all()
			.then(todo => res.status(200).send(blogpost))
			.catch(error => res.status(400).send(error));

	},

	getById: function(req, res) {

		

	}


}