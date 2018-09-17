const todo = require('../sequelize').todos;

module.exports = {
	
	getAll: function(req, res) {

		return todo
			.all()
			.then(todo => res.status(200).send(todo))
			.catch(error => res.status(400).send(error));

	},

	findById: function(req, res) {

		var id = req.params.id;
		return todo
			.findById(id).then(todo => res.status(200).send(todo))
			.catch(error => res.status(400).send(error));

	}


}