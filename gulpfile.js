'use strict'

const 
  gulp       = require('gulp'),
  $          = require('gulp-load-plugins')(),
  source     = require('vinyl-source-stream'),
  browserify = require('browserify'),
  watchify   = require('watchify'),
  babelify   = require('babelify'),
  fs         = require('fs'),
  path       = require('path')

gulp.task('scripts:server', () => {
  return gulp.src('./src-server/**/*.js')
          .pipe($.cached('server'))
          .pipe($.babel())
          .pipe(gulp.dest('./build'))
})

gulp.task('watch:scripts:server', gulp.series(
  () => gulp.watch('./src-server/**/*.js'),
  gulp.series('scripts:server')
))

gulp.task('watch:scripts:client', () => {
  const files = fs.readdirSync('./src-client')
  for (let i = 0; i < files.length; i++) {
  const file = files[i]
    if (path.extname(file) !== '.js')
      continue

    initBundlerWatch(path.join('src-client', file))

    return gulp.watch('./src-client/**/*.js')
            .on('change', initBundlerWatch)
  }
})

gulp.task('watch:scripts', gulp.parallel(
  'watch:scripts:client', 
  'watch:scripts:server'
))

let bundlers = {}
const initBundlerWatch = file => {
  if (bundlers.hasOwnProperty(file)) return

  const bundler = createBundler(file)

  bundlers[file] = bundler

  const
    watcher = watchify(bundler),
    filename = path.basename(file),
    
    bundle = () => {
      return bundler
        .bundle()
        .on('error', console.error )
        .pipe(source(filename))
        .pipe(gulp.dest('./public/build'))
    }

    watcher.on('update', bundle)
    watcher.on('time', time => console.log(`Built client in ${ time } ms`))

    bundle()
}

const createBundler = file => {
  const bundler = browserify(file)
  bundler.transform(babelify)
  return bundler
}