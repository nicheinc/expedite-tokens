const gulp = require('gulp');
const theo = require('theo');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

// theo.registerFormat('color-map.scss', require('./formats/color-map.scss.js'));
// theo.registerFormat('sketchpalette', require('./formats/sketchpalette.js'));
// theo.registerFormat('ase.json', require('./formats/ase.json.js'));
// theo.registerFormat('_colors.less', require('./formats/_colors.less.js'));

const colorFormats = [
    // {transformType: 'android', formatType: 'android.xml'},
    // {transformType: 'web', formatType: 'color-map.scss'},
    // {transformType: 'web', formatType: 'sketchpalette'},
    // {transformType: 'web', formatType: 'ase.json'},
    {transformType: 'web', formatType: 'less'},
];

// Hack to ensure Sass maps are prefixed with `expedite-`
// (Theo relies on the filename to name all Sass maps)
// const addPrefix = {prefix: 'expedite-'};

// const removePrefix = (gulpRenameOptions) => {
//     gulpRenameOptions.basename = gulpRenameOptions.basename.replace(
//         'expedite-',
//         '',
//     );
//     return gulpRenameOptions;
// };
  
gulp.task('print $', () => {
    console.log($)
})

gulp.task('color-formats', (done) => {
    colorFormats.map(({transformType, formatType}) => {
        return gulp
            .src('tokens/colors.yml')
            // .pipe($.rename(addPrefix))
            .pipe(
                $.theo({
                    transform: {type: transformType, includeMeta: true},
                    format: {type: formatType},
                }),
            )
            // .pipe($.rename(removePrefix))
            .on('error', (err) => {
                throw new Error(err);
            })
            .pipe(gulp.dest('dist'))
        });
    done();
});
