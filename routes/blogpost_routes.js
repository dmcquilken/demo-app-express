const router = require('express').Router();

module.exports = (function(app) {

	app.use('/blog_post', router.get('/', function (req, res) {
	  		res.json(
	  			{ 
	  				id: 'fdb85448-1eee-4088-9464-9f72b35d5582',
	  				data: {
	  					post: "This the test!", 
	  					title: "This is just a test"
	  				}
	  			}
	  		)
	 }));
});