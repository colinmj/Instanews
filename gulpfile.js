var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
cssnano = require('gulp-cssnano'),
prettyError = require('gulp-prettyerror'),
babel = require('gulp-babel');


gulp.task('sass', function(){
  gulp.src('./sass/style.scss')
  .pipe(prettyError()) //Error Handling
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(gulp.dest('build/css'))
  .pipe(cssnano())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('./build/css'));
 });

 const input = './js/*.js';
 const output = './js/transpiled';

 gulp.task('babel', function(){
   return gulp.src(input)
   .pipe(babel())
   .pipe(gulp.dest(output));
 });


gulp.task('scripts', ['babel', 'lint'], function() {
  gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js'}))
    .pipe(gulp.dest('./build/js'))

});

gulp.task('lint', function(){
  return gulp.src(['./js/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('watch', function() {
  gulp.watch('sass/*scss', ['sass']);
  gulp.watch('js/*.js', ['scripts']);
});


gulp.task('browser-sync', function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

    gulp.watch(['index.html', 'build/css/*.css', 'build/js/*.js']).on('change', browserSync.reload);
  });

gulp.task('default', ['watch', 'browser-sync']);


