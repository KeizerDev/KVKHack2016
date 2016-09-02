'use strict';

const browserify = require('browserify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require('gulp-util');
const babelify = require('babelify');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

gulp.task('browserify', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: './src/React/index.js',
        debug: true
    }).transform(babelify, {presets: ["es2015", "react"]});

    return b.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./web/js/'));
});

gulp.task('styles', function () {
    return gulp.src('src/Sass/**/*.scss')
        .pipe(sassGlob())
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass.sync({
            outputStyle: 'expanded',
            precision: 10,
            includePaths: ['.']
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('web/styles'))
        .pipe(reload({stream: true}));
});

gulp.task('serve', ['browserify', 'styles'], function () {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['web']
        }
    });


    gulp.watch([
        'web/**/*'
    ]).on('change', reload);

    gulp.watch([
        'src/React/**/*',
        'src/Mojs/**/*'
    ]).on('change', function () {
        gulp.run(['browserify']);
    });

    gulp.watch([
        'src/Sass/**/*'
    ]).on('change', function () {
        gulp.run(['styles']);
    });

});
