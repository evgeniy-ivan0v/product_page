var gulp = require('gulp'),
	jade = require('gulp-jade'),
	compass = require('gulp-compass'),
	plugin = require('gulp-load-plugins')();


paths = {
	jade: './app/jade/page/*.jade',
	jadeAll: './app/jade/**/*.jade', //спросить как избавиться
	scss: './app/sass/main.scss',
	scssAll: 'app/sass/**/*.scss'
};

gulp.task('jade', function() {
	var YOUR_LOCALS = {};

	gulp.src(paths.jade)
		.pipe(jade({
			locals: YOUR_LOCALS,
			pretty: '\t',
		}))
		.pipe(gulp.dest('./app/'));
});

gulp.task('compass', function() {
	gulp.src(paths.scss)
		.pipe(compass({
			config_file: './config.rb',
			css: 'app/css',
			sass: 'app/sass'
		}))
});

gulp.task('watch', function(){
	gulp.watch(paths.jadeAll, ['jade']);
	gulp.watch(paths.scssAll, ['compass'])
});

// gulp.task("server", function () {
// 	browserSync({
// 		port: 9000,
// 		server: {
// 			baseDir: "app"
// 		}
// 	});
// });

// gulp.task(watch, function () {
// 	gulp.watch([
// 		'app/*.html',
// 		'app/js/**/*.js',
// 		'app/css/**/*.css'
// 	]).on('change', browserSync.reload);
// });

gulp.task('default', ['server', 'watch']);