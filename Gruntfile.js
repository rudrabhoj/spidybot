module.exports = (grunt) => {
  grunt.initConfig({
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          'dist/spidybot.min.js': ['dist/spidybot.js']
        }
      }
    },
    browserify: {
      dist: {
        options: {
           transform: [['babelify', {presets: ['es2015']}]]
        },
        src: ['src/main.js'],
        dest: 'dist/spidybot.js',
      }
    },
    watch: {
      js: {
        files: ['src/**/*.js'],
        tasks: ['browserify', 'uglify'],
      }
    },
    'http-server': {
      'dev': {
        root: './',
        port: 2322,
        host: "0.0.0.0",
        showDir : true,
        autoIndex: true,
        ext: "html",
        runInBackground: true,
        // specify a logger function. By default the requests are
        // sent to stdout.
        logFn: function(req, res, error) { },
        // Tell grunt task to open the browser
        openBrowser : false,

        // customize url to serve specific pages
        customPages: {
          "/readme": "README.md",
          "/readme.html": "README.html"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-http-server');


  grunt.registerTask('default', ['browserify', 'uglify', 'http-server', 'watch']);
}
