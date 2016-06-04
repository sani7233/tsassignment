var gulp = require('gulp'),
    gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect');

// Resources path
var sassSource = ['components/sass/main.scss'];
var htmlSource = ['builds/development/**/*.html'];
var jsSource = [
	'builds/development/app/app.module.js',
	'builds/development/app/login/login.module.js',
	'builds/development/app/register/login.controller.js',
	'builds/development/app/register/register.module.js',
];

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

// Js task
gulp.task('js', function() {
  gulp.src(jsSource)
  .pipe(concat('script.js'))
  .pipe(gulp.dest('builds/development/js'))
  .pipe(connect.reload());
});

// Watch task to monitor changes in source
gulp.task('watch', function() {
  gulp.watch(htmlSource, ['html']); 
  gulp.watch('components/sass/*.scss', ['styles']); 
  gulp.watch(jsSource, ['js']); 	
});
	
// Live reload task
gulp.task("connect", function() {
  connect.server({
    root: 'builds/development/',
	livereload: true  
  });
});

// Default task
gulp.task('default', ['html','styles','js','connect','watch']);