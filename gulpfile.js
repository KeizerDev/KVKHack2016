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
const notifier = require('node-notifier');
const tap = require('gulp-tap');
const domain = require('domain');
const streamify = require('gulp-streamify');
const es6ify = require('es6ify');
const concat = require('gulp-concat');

gulp.task('browserify', function () {
    gulp.src('src/React/index.js', {read: false})
        .pipe(tap(function(file) {
            var d = domain.create();

            d.on("error", function(err) {
                gutil.log(
                    gutil.colors.red("Browserify compile error:"),
                    err.message,
                    "\n\t",
                    gutil.colors.cyan("in file"),
                    file.path
                );
            });

            d.run(function() {
                file.contents = browserify({
                    entries: [file.path]
                })
                    .add(es6ify.runtime)
                    .transform(babelify, {presets: ["es2015", "react"]})
                    .bundle();
            });
        }))
        .pipe(streamify(concat('app.js')))
        .pipe(gulp.dest('./web/js'));
});

gulp.task('styles', function () {
    return gulp.src('src/Sass/**/*.scss')
        .pipe($.plumber())
        .pipe(sassGlob())
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
