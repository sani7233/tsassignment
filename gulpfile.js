var gulp = require('gulp'),
    gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect');
	
// Live reload task
gulp.task("connect", function() {
  connect.server({
    root: 'builds/development/',
	livereload: true  
  });
});

// Default task
gulp.task('default', ['connect']);