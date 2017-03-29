module.exports = (grunt) => {
  grunt.initConfig({
    uglify: {
      options: {
        mangle: true
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
          browserifyOptions: {
                debug: true
            },
           transform: [['babelify', {presets: ['es2015']}]]
        },
        src: ['src/main.js'],
        dest: 'dist/spidybot.js',
      }
    },
    watch: {
      js: {
        files: ['src/**/*.js'],
        tasks: ['browserify', 'exorcise', 'uglify'],
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
    },
    exorcise: {
      app: {
        options: {},
        files: {
          'dist/spidybot.js.map':['dist/spidybot.js'],
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-exorcise');
  grunt.loadNpmTasks('grunt-http-server');


  grunt.registerTask('default', ['browserify', 'exorcise', 'uglify', 'http-server', 'watch']);
}
