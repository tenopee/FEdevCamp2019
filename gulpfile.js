var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

// gulp.task('uglify', function () {
//   gulp.src('./src/js/index.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('./dist'));
// });

gulp.task('sass', function(){
  gulp.src('/sass/index.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('/src/css/'));
});

var gulp = require('gulp');

// sass compiler
var sass = require('gulp-sass');


gulp.task('sass', function() {
    gulp.src(path.join(assetsPath, '/sass/index.scss'))
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.join(assetsPath, '/src/css/')));
});
