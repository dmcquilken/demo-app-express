'use strict';

module.exports = {
	"server":{
		"port": process.env.PORT || 8888
	},
	"datasource":{
		"host":"192.168.56.100",
		"port":5432,
		"username":"demouser",
		"password":"demouser",
		"dbname":"blog_posts",
		"dialect":"postgres"
	}
};