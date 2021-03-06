'use strict';

process.env.PHANTOMJS_EXECUTABLE = process.env.PHANTOMJS_EXECUTABLE || '/usr/local/opt/nvm/v0.10.28/bin/phantomjs';

module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      all: ['Gruntfile.js', 'server.js', 'test/api/*.js','app/js/**/*.js', 'app/controllers/*.js', 'routes/*.js', 'config/*.js', 'models/*.js']
    },
    simplemocha: {
      options: {
        ui: 'bdd'
      },
      all: { src: ['test/api/**/*.js'] }
    },
    clean: ['client'],
    copy: {
      all: {
        expand: true,
        cwd: './app',
        src: ['views/*.html', './*.html', '!Gruntfile.js'],
        dest: 'client/',
        flatten: false,
        filter: 'isFile'
      },
      design: {
        expand: true,
        cwd: './design',
        src: ['sass/**/*', 'stylesheets/*.css', 'images/**/*', 'user_home.js'],
        dest: 'client/',
        flatten: false,
        filter: 'isFile'
      }
    },
    browserify: {
      all: {
        src: 'app/js/**/*.js',
        dest: 'client/client.js'
      },
      options: {
        transform: ['debowerify'],
        debug: true
      }
    },
    express: {
      dev: {
        options: {
          background: true,
          script: 'server.js'
        }
      },
      prod: {
        options: {
          script: 'server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: 'server.js'
        }
      }
    },
    casper: {
      acceptance : {
        options : {
          pre: 'node server.js',
          verbose: true,
          'log-level': 'debug',
          test : true,
        },
        files : {
          '/dev/null' : ['test/*_test.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['app/js/**/*.js','test/*.js', 'app/**/*.html'],
        tasks: ['build']
      },
      express: {
          files: ['server.js', 'routes/*.js', 'models/*.js'],
          tasks: ['server'],
          options: {
            spawn: false
          }
      }
    },
    shell: {
      mongodb: {
        command: 'mongod --dbpath ./db',
        options: {
          async: true,
          stdout: false,
          stderr: true,
          failOnError: true,
          execOptions: {
            cwd: '.'
          }
        }
      }
    },

  });

  grunt.registerTask('serve', [ 'build', 'shell', 'express:dev', 'watch' ]);
  grunt.registerTask('server', 'serve');
  grunt.registerTask('test:acceptance',['express:dev','casper']);
  grunt.registerTask('test:api','simplemocha');
  grunt.registerTask('test',['test:acceptance','test:api']);
  grunt.registerTask('default', ['jshint', 'test']);
  grunt.registerTask('build',['clean', 'browserify', 'copy:all', 'copy:design']);
};
