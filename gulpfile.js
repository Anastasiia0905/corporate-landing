'use strict';
var gulp            = require('gulp'),
    plumber         = require('gulp-plumber'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync'),
    watch           = require('gulp-watch'),
    // concat          = require('gulp-concat'),
    //babel           = require('gulp-babel'),
    //cssnano         = require('gulp-cssnano'),
    //rename          = require('gulp-rename'),
    //del             = require('del'),
     autoprefixer    = require('gulp-autoprefixer');

    sass.compiler = require('node-sass');

    
    gulp.task('sass', function () {
      return gulp.src('./app/**/*.scss')
          .pipe(plumber())
          .pipe(sass().on('error', sass.logError))
          .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
          .pipe(gulp.dest('./app/css'))
          .pipe(browserSync.reload({
          stream: true
      }))
    });

    gulp.task('browserSync', () => {
      browserSync({
          server: { baseDir: './app'},
          notify: false //delete notification
      })
  });


    gulp.task('watch', gulp.parallel('sass', 'browserSync'), () => {
        gulp.watch('./app/**/*.scss', gulp.parallel('sass'));
        gulp.watch('./app/**/*.html', gulp.parallel('browserSync')); //watch HTML
     // gulp.watch('./app/**/*.js', browserSync.reload); //watch JS
  });
  

    

    


    //gulp.task('sass:watch', function () {
     // gulp.watch('./sass/**/*.scss', ['sass']);
    //});

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}