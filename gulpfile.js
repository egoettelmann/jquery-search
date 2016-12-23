var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
	return gulp.src('./jquery.search.js')
		.pipe(uglify({ preserveComments: 'license' }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./'));
});