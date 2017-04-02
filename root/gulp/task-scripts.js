module.exports = function(gulp, config) {

    var concat = require('gulp-concat'),
        plumber = require('gulp-plumber'),
        uglify = require('gulp-uglify'),
        include = require("gulp-include"),
        rename = require('gulp-rename');

    function handleError(err) {
      console.log(err.toString());
      this.emit('end');
    }

    gulp.task('scripts', function () {
      return gulp.src(config.scripts.src)
        .pipe(plumber({errorHandler: handleError }))
        // .pipe(concat('app.min.js'))
        .pipe(include())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.scripts.dest))
        // .pipe(reload({stream:true}));
    });

};
