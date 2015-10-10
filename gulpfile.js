var gulp = require ('gulp'),
	//sass = require ('gulp-sass'),
	uglify = require ('gulp-uglify'),
	rename = require ('gulp-rename'),
	minifyCss = require ('gulp-minify-css'),
	browserSync = require ('browser-sync').create();


gulp.task('test', function(){
	console.log('hello');
});

// gulp.task('sass', function(){
// 	gulp.src('components/scss/*.scss')
// 	.pipe(sass({
// 		outputStyle: 'expanded'
// 	}).on('error', sass.logError))
// 	.pipe(gulp.dest('././builds/development/css'))
// 	.pipe(browserSync.stream());
// });

// uglify bootstrap.js to bootstrap.min.js
gulp.task('uglifyPlugins', function(){
	return gulp.src(['components/libs/bootstrap/dist/js/bootstrap.js',
				'components/libs/jquery/dist/jquery.js'])
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

// Runs both tasks at once
gulp.task('build', ['uglifyPlugins', 'minifyPlugins']);

// watching
gulp.task('watch', function(){
	browserSync.init({
        server: {
            baseDir: "builds/development"
        }
    });
	//gulp.watch('components/scss/*.scss', ['sass']);
	gulp.watch("builds/development/*.html").on("change", browserSync.reload);
	gulp.watch("builds/development/css/*.css").on("change", browserSync.reload);
	gulp.watch("builds/development/images/*.*").on("change", browserSync.reload);
});

gulp.task('default', ['watch']);