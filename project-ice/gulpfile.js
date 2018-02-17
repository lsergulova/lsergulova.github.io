var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function() {
  return gulp.src('add/blocks/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'));
});

gulp.task('watch:less', function() {
  gulp.watch('add/blocks/**/*.less', ['less']);
});

gulp.task('default', ['less', 'watch:less']);