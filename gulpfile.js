var gulp = require ('gulp'),
	sass = require ('gulp-sass');


gulp.task('test', function(){
	console.log('hello');
});

gulp.task('sass', function(){
	gulp.src('components/scss/*.scss')
	.pipe(sass({
		outputStyle: 'expanded'
	}).on('error', sass.logError))
	.pipe(gulp.dest('././builds/development/css'))
});


// watching
gulp.task('watch', function(){
	gulp.watch('components/scss/*.scss', ['sass']);
});

gulp.task('default', ['watch']);