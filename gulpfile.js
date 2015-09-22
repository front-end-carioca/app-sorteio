'use strict';

var gulp  = require('gulp'),
	react = require('gulp-react'),
	sass  = require('gulp-sass'),
	watch = require('gulp-watch'); 

// Sass
gulp.task('sass', function () {
  gulp.src('app/src/sass/**/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./app/public/assets/css'));
});

// Reactjs 
gulp.task('reactjs', function () {
    return gulp.src('./app/src/jsx/components.jsx')
        .pipe(react())
        .pipe(gulp.dest('./app/public/assets/js'));
});

// Watch 
gulp.task('watch', function(){
    gulp.watch('./app/src/jsx/**/*.jsx', ['reactjs']);
    gulp.watch('app/src/sass/**/*.sass', ['reactjs']);
    
});

// plugin Default
gulp.task('default', function() {
  console.log('Running...')
});

gulp.task('default', ['sass', 'reactjs', 'watch']);