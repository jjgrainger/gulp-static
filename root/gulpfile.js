// dependencies
var gulp = require('gulp');
var config = require('./gulp/config.json');

// add individual tasks here
require('./gulp/task-styles')(gulp, config);
require('./gulp/task-scripts')(gulp, config);
require('./gulp/task-nunjucks')(gulp, config);
require('./gulp/task-images')(gulp, config);
require('./gulp/task-watch')(gulp, config);
require('./gulp/task-server')(gulp, config);
require('./gulp/task-clean')(gulp, config);
require('./gulp/task-surge')(gulp, config);

// command line tasks
// build our app
gulp.task('build', ['styles', 'scripts', 'nunjucks']);
// server our app
gulp.task('serve', ['build', 'server']);
// default task
gulp.task('default', ['build', 'server', 'watch']);
// deploy the site
gulp.task('deploy', ['clean', 'build', 'surge']);
