var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');


gulp.task('lint', function () {
  gulp.src(['./**/*.js', '!./node_modules/**/*.js'])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch(['./**/*.js'], ['lint']);
});

gulp.task('default', ['lint', 'watch']);
