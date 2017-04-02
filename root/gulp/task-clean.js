module.exports = function(gulp, config) {

    var clean = require('gulp-clean');

    gulp.task('clean', function() {
        return gulp
            .src(config.clean.files, {read: false})
            .pipe(clean());
    });
};
