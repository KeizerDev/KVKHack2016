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

gulp.task('serve', ['browserify'], function () {
    browserSync({
        notify: false,
        port: 9000,
        server: {
            baseDir: ['web']
        }
    });


    gulp.watch([
        'web/**/*',
        'src/React/index.js'
    ]).on('change', reload);

});
