module.exports = function(gulp, config) {

    var data = require('gulp-data');
    var nunjucks = require('gulp-nunjucks-render');
    var htmlmin = require('gulp-htmlmin');

    var handleError = function(err) {
      console.log(err.toString());
      this.emit('end');
    };

    // Templating
    gulp.task('nunjucks', function() {
        return gulp
            .src('./app/pages/**/*.html')
            .pipe(data(function() {
                return require(__dirname + '/../app/data');
            }))
            .pipe(nunjucks({
                path: ['app/templates']
            }))
            .on('error', handleError)
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest('./public'));
    });
};
