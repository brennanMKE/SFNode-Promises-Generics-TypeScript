'use strict';

module.exports = function(grunt) {
  require("time-grunt")(grunt);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-tslint');
  
  let compilerOptions = require('./tsconfig.json').compilerOptions;

  grunt.initConfig({

    /**
     * Clean files
     */
    clean: {
      js: {
        options: { force: true },
        files: [{
          dot: false,
          src: [
            '**/*.js',
            '**/*.js.map',
            '!Gruntfile.js',
            '!node_modules/**/*.js',
            '!node_modules/**/*.js.map'
          ]
        }],
        verbose: true
      }
    },

    /**
     * TSLint
     */
    tslint: {
      options: {
        configuration: require('./tslint.json')
      },
      files: {
        src: [
            '**/*.js',
            '**/*.js.map',
            '!Gruntfile.js',
            '!node_modules/**/*.js',
            '!node_modules/**/*.js.map'
          ]
      }
    },

    /**
     * Compile TS
     */
    ts: {
      default : {
        src: [
          '**/*.ts',
          '!node_modules/**/*.ts',
        ],
        options: compilerOptions
      }
    },

  });

  grunt.registerTask('build', ['clean', 'ts']);
  grunt.registerTask('test', ['clean', 'tslint']);
  grunt.registerTask('default', ['check', 'ts']);

};