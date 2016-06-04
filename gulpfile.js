var gulp = require('gulp'),
    gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect');

// Resources path
var sassSource = ['components/sass/main.scss'];
var htmlSource = ['builds/development/*.html'];

// Html task
gulp.task('html', function() {
  gulp.src(htmlSource)
  .pipe(connect.reload());		
});

// Sass task
gulp.task('styles', function() {
  gulp.src(sassSource)
  	  .pipe(sass({outputStyle: 'compressed'}))
	  .on('error', gutil.log)
	  .pipe(gulp.dest('builds/development/css'))
	  .pipe(connect.reload());	  
});

// Watch task to monitor changes in source
gulp.task('watch', function() {
  gulp.watch('components/sass/*.scss', ['styles']); 
  gulp.watch(htmlSource, ['html']); 	
});
	
// Live reload task
gulp.task("connect", function() {
  connect.server({
    root: 'builds/development/',
	livereload: true  
  });
});

// Default task
gulp.task('default', ['html','styles','connect','watch']);