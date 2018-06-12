const config = require('./config/config');
const gulp = require('gulp');
const exec = require('child_process').exec;
const plugins = require('gulp-load-plugins')({
	pattern: [
	'gulp-nodemon',
	'gulp-exec'
	]
});

gulp.task('dev:initdb', [], (callback) => {
	
	exec('./node_modules/.bin/sequelize db:migrate', function (err, stdout, stderr) {
    	console.log(stdout);
    	console.log(stderr);
    	callback(err);
  	});
	callback();

});

gulp.task('dev:serve', [], () => {

	plugins.nodemon({
	    script: 'app.js',
	  	env: { 'NODE_ENV': 'development' }
	});

});