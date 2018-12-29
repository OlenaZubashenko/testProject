const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('compileScss', function() {
    return gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});
gulp.task('watch', function() {
    gulp.watch('*.scss', gulp.series('compileScss'))
});