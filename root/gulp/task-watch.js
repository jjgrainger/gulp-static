module.exports = function(gulp, config) {

    gulp.task('watch', function() {
        for(var src in config.watch) {
            gulp.watch(src, config.watch[src]);
        }
    });
};
