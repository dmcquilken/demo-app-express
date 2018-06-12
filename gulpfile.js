const config = require('./config/config');
const gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
	pattern: [
	'gulp-nodemon'
	]
});

gulp.task('dev:build', [], () => {

});

gulp.task('dev:initdb', [], () => {
	gulp.run()

});

gulp.task('dev:serve', [], () => {

	plugins.nodemon({
	    script: 'app.js',
	  	env: { 'NODE_ENV': 'development' }
	  });

});