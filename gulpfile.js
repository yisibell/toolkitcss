const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const del = require('del')

const isProd = process.env.NODE_ENV === 'production'

const paths = {
  styles: {
    src: './src/index.scss',
    dest: 'dist'
  }
}

function clean() {
  return del([ 'dist' ])
}

function styles() {
  const outputStyle = isProd ? 'compressed' : 'expanded'

  return gulp.src(paths.styles.src)
    .pipe(sass({ outputStyle }).on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest))
}

const build = gulp.series(clean, gulp.parallel(styles))

function watch() {
  gulp.watch('./src/**/*.scss', styles)
}

exports.clean = clean
exports.styles = styles
exports.watch = watch

exports.default = build
