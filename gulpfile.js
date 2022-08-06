import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';


const styles = () => { 
    return gulp.src('source/less/style.less') 
      .pipe(plumber()) 
      .pipe(less())
      .pipe(postcss([
        autoprefixer(),
        csso()
      ]))
      .pipe(gulp.dest('build/css')) 
  }
  
  exports.styles = styles; 


// Clean
export const clean = () => {
    return del('build');
};

// Copy
const copy = (done) => {
    gulp.src([
        'source/fonts/*.{woff2,woff}',
        'source/*.html',
        'source/*.js'
    ], {
        base: 'source'
    })
        .pipe(gulp.dest('build'))
    done();
}


// StylesMin
const stylesMin = () => {
    return gulp.src('source/less/style.less', { sourcemaps: true })
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([
            autoprefixer(),
            csso()
        ]))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
        .pipe(browser.stream());
}


// SVG
const sprite = () => {
    return gulp.src('source/img/icons/*.svg')
        .pipe(svgo())
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename('sprite.svg'))
        .pipe(gulp.dest('build/img'));
}


// Images
const optimizeImages = () => {
    return gulp.src('source/img/**/*.{png,jpg}')
        .pipe(squoosh())
        .pipe(gulp.dest('build/img'))
}


// Server
const server = (done) => {
    browser.init({
        server: {
            baseDir: 'build'
        },
        cors: true,
        notify: false,
        ui: false,
    });
    done();
}

// Watcher
const watcher = () => {
    gulp.watch('source/less/**/*.less', gulp.series(styles));
    gulp.watch('source/*.html').on('change', browser.reload);
}


export default gulp.series(
    clean,
    copy,
    // htmlmin,
    copyImages,
    gulp.parallel(
        stylesMin,
        svg,
        sprite,
        createWebp
    ),
    gulp.series(
        server,
        watcher
    ));