var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require("vinyl-source-stream");
var browserify = require('browserify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');

gulp.task('browserify', function(){
  var bundler = browserify('./src/main.js',{ debug: true });
  return bundler
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascripts'));
});
