//Use gulp-ruby-sass instead of gulp.src to compile Sass files
let gulp = require ('gulp')
let sass = require ('gulp-ruby-sass')
// var minifyCss = require('gulp-minify-css');//压缩css模块
// var jshint = require('gulp-jshint');//js代码校验模块
// var uglify = require('gulp-uglify');//压缩js代码模块

//配置Sass编译
gulp.task('sass', function() {
    return sass('sass/') 
    .on('error', function (err) {
      console.error('Error!', err.message);//监听task是否报错
   })
    .pipe(gulp.dest('css'));//写入css
});

gulp.task('watchSassBuild',function() {
    gulp.watch('sass/**/*.scss', ['sass']);//监视是否有改动
});

// 自动编译 Sass
gulp.task('asb',['sass','watchSassBuild']);