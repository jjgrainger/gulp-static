module.exports = function(gulp, config) {

    var spawn = require('child_process').spawn,
        path = require('path');

    gulp.task('surge', function() {
        spawn('./node_modules/.bin/surge', [config.surge.project], { stdio: 'inherit' });
    });
};
