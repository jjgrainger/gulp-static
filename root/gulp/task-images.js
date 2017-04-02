module.exports = function(gulp, config) {

    var imageMin = require('gulp-imagemin');
    var imageResize = require('gulp-image-resize');

    // Optimise images
    gulp.task('images', function() {
        return gulp
            .src(config.images.src)
            .pipe(imageMin({
                "verbose": false
            }))
            .pipe(imageResize({
                width: 1200,
                height: 1200,
                crop: false,
                upscale: false
            }))
            .pipe(gulp.dest(config.images.dest));
    });

};
