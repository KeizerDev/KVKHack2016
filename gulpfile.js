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
const spawn = require('child_process').spawn;
var node;
/**
 * $ gulp server
 * description: launch the server. If there's a server already running, kill it.
 */
gulp.task('server', function() {
    if (node) node.kill()
    node = spawn('node', ['server.js'], {stdio: 'inherit'})
    node.on('close', function (code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });
});

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
                    .transform(babelify, {presets: ["es2015", "react", "stage-0"], "plugins": ["add-module-exports", "transform-decorators-legacy", "transform-object-assign"], compact: true})
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

gulp.task('serve', ['browserify', 'styles', 'server'], function () {
    browserSync({
        notify: false,
        port: 9000,
        proxy: "localhost:3000"
    });

    gulp.watch(['./server.js', './api/**/*'], function() {
        gulp.run('server')
    });

    gulp.watch([
        'web/**/*'
    ]).on('change', reload);

    gulp.watch([
        'web/js/app.js'
    ]).on('change', function () {
        notifier.notify({title: 'wooop', message: 'Done'});
    });

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


// clean up if an error goes unhandled.
process.on('exit', function() {
    if (node) node.kill()
})