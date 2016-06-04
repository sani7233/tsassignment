var gulp = require('gulp'),
    gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	connect = require('gulp-connect');

var env,
	sassSource,
	htmlSource,
	jsSource,
	outputDir,
	sassStyle;
	
	// not orking on windows
	//env = process.env.NODE_ENV || 'development';

	env = 'development';

	if(env==='development') {
	  outputDir = 'builds/development/';
	  sassStyle = 'expanded';
	} else {
	  outputDir = 'builds/production/';
	  sassStyle = 'compressed';	
	}
	
	sassSource = ['components/sass/main.scss'];
	htmlSource = [outputDir + '**/*.html'];
	jsSource = [
	  'builds/development/app/app.module.js',
	  'builds/development/app/route.module.js',
	  'builds/development/app/login/login.module.js',
	  'builds/development/app/login/login.controller.js',	
	  'builds/development/app/register/register.module.js',
	  'builds/development/app/register/register.modernizr.provider.js',
	  'builds/development/app/register/register.dob.directive.js',
	  'builds/development/app/register/register.password.directive.js',	
	  'builds/development/app/register/register.controller.js',	
];

// Html task
gulp.task('html', function() {
  gulp.src(htmlSource)
  .pipe(connect.reload());		
});

// Sass task
gulp.task('styles', function() {
  gulp.src(sassSource)
  	  .pipe(sass({outputStyle: sassStyle}))
	  .on('error', gutil.log)
	  .pipe(gulp.dest(outputDir + 'css'))
	  .pipe(connect.reload());	  
});

// Js task
gulp.task('js', function() {
  gulp.src(jsSource)
  .pipe(concat('script.js'))
  //.pipe(gulpif(env==='production', uglify()))
  .pipe(gulp.dest(outputDir + 'js'))
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
    root: outputDir,
	livereload: true  
  });
});

// Default task
gulp.task('default', ['html','styles','js','connect','watch']);