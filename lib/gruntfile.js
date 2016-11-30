module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        predef: ["document", "console", "$", "$scope"],
        esnext: true,
        globalstrict: true,
        globals: { "angular": true, "app": true }
      },
      files: ['../app/**/*.js']
    },
    sass: {
      dist: {
        files: {
          '../css/styles.css': '../sass/styles.scss' //if your scss files is named something different, you’ll have to change this path.
            //this creates a file called main.css FROM sass/styles.scss
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../app/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};
