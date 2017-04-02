module.exports = function(gulp, config) {

    // dependencies
    var autoprefixer = require('gulp-autoprefixer'),
        concat = require('gulp-concat'),
        minifyCSS = require('gulp-minify-css'),
        notify = require('gulp-notify'),
        plumber = require('gulp-plumber'),
        sass = require('gulp-sass'),
        sourcemaps = require('gulp-sourcemaps');

    // create tasks
    gulp.task('styles', function() {
      return gulp.src(config.styles.src)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>") }))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(concat('app.min.css'))
        .pipe(autoprefixer('last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.styles.dest));
    });

};
