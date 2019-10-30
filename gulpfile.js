const browserSync = require('browser-sync');
const gulp = require('gulp');
const theo = require('theo');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

theo.registerFormat(
    'spacing-map.scss',
    require('./formats/spacing-map.scss.js'),
  );
theo.registerFormat('ase.json', require('./formats/ase.json.js'));
theo.registerFormat('sketchpalette', require('./formats/sketchpalette.js'));

const colorFilters = [
    {transformType: 'web', formatType: 'map.scss'},
];

const colorFormats = [
    {transformType: 'web', formatType: 'less'},
    {transformType: 'web', formatType: 'scss'},
    {transformType: 'web', formatType: 'map.scss'},
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
  
const spacingFormats = [{transformType: 'web', formatType: 'spacing-map.scss'}];

gulp.task('print $', () => {
    console.log($)
})

gulp.task('spacing-formats', (done) => {
    spacingFormats.map(({transformType, formatType}) =>
      gulp
        .src('tokens/spacing.yml')
        .pipe(
          $.theo({
            transform: {type: transformType, includeMeta: true},
            format: {type: formatType},
          }),
        )
        .on('error', (err) => {
          throw new Error(err);
        })
        .pipe(gulp.dest('dist')),
    );
    done();
  });

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

gulp.task('color-filters', (done) => {
    colorFilters.map(({transformType, formatType}) => {
        return gulp
            .src('tokens/color-filters.yml')
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

function serve(done) {
    browserSync.init({
        open: false,
        notify: false,
        server: 'docs',
    });
    done();
}
  
function reload(done) {
    browserSync.reload();
    done();
}

function watch() {
    gulp.watch(
        ['tokens/*.yml'],
        gulp.series([
            'positioning-formats',
            'color-formats',
        ]),
    );
    // For when we are generating docs
    // gulp.watch('docs/**/*.scss', gulp.series('docs:styles'));
    gulp.watch(['formats/**/*.*', 'gulpfile.js'], gulp.series($.restart));
    gulp.watch(['docs/**/*.html'], gulp.series(reload));
}
  
gulp.task(
    'watch',
    gulp.series(
        ['spacing-formats', 'positioning-formats', 'color-filters', 'color-formats'],
        gulp.series(serve, watch),
    ),
);

gulp.task(
    'default',
    gulp.series([
        'spacing-formats',
        'positioning-formats',
        'color-formats',
        'color-filters',
    ]),
  );