var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnext  = require('postcss-cssnext'),
    modernizr  = require('gulp-modernizr'),
    watch  = require('gulp-watch');

gulp.task('default', function(){
    console.log('test');
});

/* postcss */

gulp.task('css', function() {
    var plugins = [
        cssnext
    ];
    return gulp.src('initial/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('final'));
});

/* modernizr */
gulp.task('modernizr', function(){
    return gulp.src('./js/*js')
        .pipe(modernizr())
        .pipe(gulp.dest("build/"));
});

/* watch */
gulp.task('watch', function(){
    return watch('css/**/*.css', { ignoreInitial: false})
          .pipe(gulp.dest('build'));
});

gulp.task('callback', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch('css/**/*.css', function () {
        gulp.src('css/**/*.css')
            .pipe(gulp.dest('build'));
    });
});