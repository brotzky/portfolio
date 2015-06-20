module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        uglify_watch: {
            files: ['js/javascript.js'],
		tasks: ['uglify'],
            options: {
              spawn: false,
            },
        },
        cssmin_watch: {
          	files: ['css/font-awesome.min.css', 'css/style.css'],
		tasks: ['cssmin'],
            options: {
              spawn: false,
            },
        },
    },
    uglify: {
      build: {
        src: ['js/javascript.js'], // source files mask
            dest: 'js/build/',    // destination folder
            expand: true,    // allow dynamic building
            flatten: true,   // remove all unnecessary nesting
            ext: '.min.js'   // replace .js to .min.js
      }
    },
    cssmin: {
        my_target: {
            src: ['css/font-awesome.min.css', 'css/style.css'],
            dest: 'css/build/style.min.css'
        }
      }
  });

  grunt.loadNpmTasks('grunt-install-dependencies');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');


  // Default task(s).
  grunt.registerTask('default', ['watch','uglify', 'cssmin']);

};