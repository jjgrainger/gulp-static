module.exports = function(gulp, config) {

    var connect = require('gulp-connect'),
        gutil = require('gulp-util');

    gulp.task('server', function() {
        connect.server(config.server, function() {
            gutil.log('listening on http://localhost:' + config.server.port);
        });
    });
};
