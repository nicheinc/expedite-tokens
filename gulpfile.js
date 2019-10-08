const gulp = require('gulp');
const theo = require('theo');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

theo.registerFormat('ase.json', require('./formats/ase.json.js'));
theo.registerFormat('sketchpalette', require('./formats/sketchpalette.js'));

const colorFormats = [
    {transformType: 'web', formatType: 'less'},
    {transformType: 'web', formatType: 'scss'},
    {transformType: 'web', formatType: 'html'},
    {transformType: 'web', formatType: 'json'},
    {transformType: 'web', formatType: 'ase.json'},
    {transformType: 'android', formatType: 'android.xml'},
    {transformType: 'web', formatType: 'sketchpalette'},
];

const positioningFormats = [
    {transformType: 'web', formatType: 'less'},
    {transformType: 'web', formatType: 'scss'},
    {transformType: 'web', formatType: 'json'},
];
  
gulp.task('print $', () => {
    console.log($)
})

gulp.task('positioning-formats', (done) => {
    positioningFormats.map(({transformType, formatType}) => {
        return gulp
            .src('tokens/positioning.yml')
            .pipe(
                $.theo({
                    transform: {type: transformType, includeMeta: true},
                    format: {type: formatType},
                }),
            )
            .on('error', (err) => {
                throw new Error(err);
            })
            .pipe(gulp.dest('dist'))
        });
    done();
});

gulp.task('color-formats', (done) => {
    colorFormats.map(({transformType, formatType}) => {
        return gulp
            .src('tokens/colors.yml')
            .pipe(
                $.theo({
                    transform: {type: transformType, includeMeta: true},
                    format: {type: formatType},
                }),
            )
            .on('error', (err) => {
                throw new Error(err);
            })
            .pipe(gulp.dest('dist'))
        });
    done();
});

gulp.task(
    'default',
    gulp.series([
      'positioning-formats',
      'color-formats',
    ]),
  );