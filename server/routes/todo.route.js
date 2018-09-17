const router = require('express').Router();
const todoController = require('../controllers/todo.controller');


module.exports = (function(app) {

	app.use('/todos', router.get('/', function (req, res) {
		res.status(200).json([
			{ id: 'a3580e98-14d4-4008-8b08-fe9b790003fa', title: 'Paint the House', description: 'Buy paint and apply it to the house' },
			{ id: '76e69640-9c87-4c88-8087-5b6df0c43eaa', title: 'Pickup Milk', description: 'Go to the grocery store and pickup the milk' }
		])
	}))

});