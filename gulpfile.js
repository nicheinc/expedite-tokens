const browserSync = require('browser-sync');
const gulp = require('gulp');
const theo = require('theo');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

theo.registerFormat(
    'spacing-map.scss',
    require('./formats/spacing-map.scss.js'),
  );
theo.registerFormat('color-map.scss', require('./formats/color-map.scss.js'));
theo.registerFormat('ase.json', require('./formats/ase.json.js'));
theo.registerFormat('sketchpalette', require('./formats/sketchpalette.js'));
theo.registerFormat('d.ts', require('./formats/d.ts'));

const colorFormats = [
    {transformType: 'web', formatType: 'html'},
    {transformType: 'web', formatType: 'ase.json'},
    {transformType: 'android', formatType: 'android.xml'},
    {transformType: 'web', formatType: 'sketchpalette'},
];
  
const webFormats = [
    {transformType: 'web', formatType: 'less'},
    {transformType: 'web', formatType: 'scss'},
    {transformType: 'web', formatType: 'map.scss'},
    {transformType: 'web', formatType: 'json'},
    {transformType: 'web', formatType: 'common.js'},
    {transformType: 'web', formatType: 'custom-properties.css'},
    {transformType: 'web', formatType: 'raw.json'},
];

gulp.task('typings', (done) => {
    gulp
        .src('tokens/index.yml')
        .pipe(
            $.theo({
                transform: {type: 'web'},
                format: {type: 'd.ts'},
            }),
        )
        .on('error', (err) => {
            throw new Error(err);
        })
        .pipe(gulp.dest('dist'));
    done();
});

gulp.task('web-formats', (done) => {
    webFormats.map(({transformType, formatType}) =>
        gulp
            .src('tokens/*.yml')
            .pipe(
                $.theo({
                    transform: {type: transformType},
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
            // 'positioning-formats', // AssertionError [ERR_ASSERTION]: Task never defined: positioning-formats - SeanMcP
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
        ['web-formats', 'color-formats'],
        gulp.series(serve, watch),
    ),
);

gulp.task(
    'default',
    gulp.series([
        'web-formats',
        'color-formats',
        'typings',
    ]),
  );