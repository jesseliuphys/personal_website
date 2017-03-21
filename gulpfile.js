var gulp = require('gulp');
var postcss = require('gulp-postcss');
var atImport = require('postcss-import');
var cssnext = require('postcss-cssnext');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano')({ autoprefixer: false }); // cssnext already has autoprefixer
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

// default task is to begin watching the css source directory
gulp.task('default', ['watch']);

// 'css' task is the PostCSS "compilation"
gulp.task('css', function () {
	var plugins = [
    atImport,
    cssnext,
    mqpacker,
    cssnano,
  ];
  return gulp.src('./src/mistphysics.css')
    // begin sourcemap tracking before doing any processing
    .pipe(sourcemaps.init())
    // execute the postcss plugins in order specified in the list
    .pipe(postcss(plugins))
    // rename the output
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
});

// 'watch' task monitors the css source directory for changes
// execute 'css' and 'minify' if changes made
gulp.task('watch', function() {
  gulp.watch('./src/*.css', ['css']);
});