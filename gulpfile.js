// import gulp from 'gulp';
// import plumber from 'gulp-plumber';
// import less from 'gulp-less';
// import postcss from 'gulp-postcss';
// import autoprefixer from 'autoprefixer';
// import browser from 'browser-sync';

// const styles = () => {
//     return gulp.src('source/less/style.less')
//         .pipe(plumber())
//         .pipe(less())
//         .pipe(postcss([
//             autoprefixer(),
//             csso()
//         ]))
//         .pipe(gulp.dest('build/css'))
// }

// exports.styles = styles;

// const watcher = () => {
//     gulp.watch('source/less/**/*.less', gulp.series('styles'));
//     gulp.watch('source/*.html').on('change', browser.reload);
// }

// export default gulp.series(
//     styles, server, watcher
// );
