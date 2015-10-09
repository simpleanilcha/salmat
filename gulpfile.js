var gulp = require ('gulp'),
	sass = require ('gulp-sass'),
	uglify = require ('gulp-uglify'),
	rename = require ('gulp-rename'),
	minifyCss = require ('gulp-minify-css');


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

// uglify bootstrap.js to bootstrap.min.js
gulp.task('uglifyPlugins', function(){
	gulp.src('components/libs/bootstrap/dist/js/bootstrap.js')
	.pipe(rename({
		suffix: '.min',
		extname: '.js'
	}))
	.pipe(uglify())
	.pipe(gulp.dest('builds/development/js'))
});

// minify boostrap.css
gulp.task('minifyPlugins', function(){
	gulp.src('components/libs/bootstrap/dist/css/bootstrap.css')
	.pipe(rename({
		suffix: '.min',
		extname: '.css'
	}))
	.pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(gulp.dest('builds/development/css'))
})

// watching
gulp.task('watch', function(){
	gulp.watch('components/scss/*.scss', ['sass']);
});

gulp.task('default', ['watch']);