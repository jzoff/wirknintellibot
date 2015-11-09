var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var foreman = require('gulp-foreman');

gulp.task('lint', function () {
  gulp.src(['./**/*.js', '!./node_modules/**/*.js'])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('foreman', function() {
    foreman();
});

gulp.task('watch', function() {
    gulp.watch(['./**/*.js'], ['lint']);
});

gulp.task('default', ['lint', 'watch']);
