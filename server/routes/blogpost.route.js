const router = require('express').Router();
const blogpostController = require('../controllers/blogpost.controller');


module.exports = (function(app) {

	app.use('/blog_post', router.get('/', function (req, res) {
		blogpostController.getAll(req, res);
	 }));

});