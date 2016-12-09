var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('default', function(){
    console.log('test');
});

gulp.task('less', function() {
    return gulp.src('less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
});