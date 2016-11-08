var distDir = './scripts';

var gulp = require('gulp');
var typescript = require('gulp-typescript');

gulp.task('ts', function() {
  var rimraf = require('rimraf');
  rimraf(distDir, function(){});

  gulp.src(['./src/ts/*.ts', '!./src/typings'])
    .pipe(typescript())
    .js
    .pipe(gulp.dest(distDir));
});

gulp.task('default', ['ts']);
