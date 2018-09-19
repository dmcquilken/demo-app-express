const todo = require('../sequelize').todos;

module.exports = {
	
	getAll: function(req, res) {

		return todo
			.all()
			.then(todo => res.status(200).send(todo))
			.catch(error => res.status(400).send(error));

	},

	deleteById: function(req, res) {

		var id = req.params.id;
		return todo.destroy({ where: {id: id}})
			.then(res.status(200).send())
			.catch(error => res.status(400).send(error));

	},

	create: function(req, res) {

		return todo.create({data: req.body})
			.then(todo => res.status(200).send(todo))
			.catch(error => res.status(400).send(error));

	}


}