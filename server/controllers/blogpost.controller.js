// var models = require('../models/blogpost.model.js');

module.exports = {
	
	getAll: function(req, res) {

		res.json(
			{ 
				id: 'fdb85448-1eee-4088-9464-9f72b35d5582',
				data: {
					post: "This the test!", 
					title: "This is just a test"
				}
			}
		)

	},

	getById: function(id) {

		

	}


}