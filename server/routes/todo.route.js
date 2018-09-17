const router = require('express').Router();
const todoController = require('../controllers/todo.controller');


module.exports = (function(app) {


	app.get('/todo/:id', function (req, res) {
		todoController.findById(req, res);
	})

	app.get('/todos', function (req, res) {
		todoController.getAll(req, res);
	})

	app.delete('/todo/:id', function (req, res) {
		todoController.deleteById(req, res);
	})

	app.post('/todo', function (req, res) {
		todoController.create(req, res);
	})

});