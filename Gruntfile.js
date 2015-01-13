module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        javascript_watch: {
            files: 'js/jquery.js',
		tasks: 'uglify'
        },
        css_watch: {
          	files: 'css/style.css',
		tasks: 'cssmin'
        }
    },
    uglify: {
      build: {
        src: ['js/jquery.js', 'js/music-app.js'], // source files mask
            dest: 'js/build/',    // destination folder
            expand: true,    // allow dynamic building
            flatten: true,   // remove all unnecessary nesting
            ext: 'javascript.min.js'   // replace .js to .min.js
      }
    },
    cssmin: {
       my_target: {
            src: 'style.css',
            dest: 'css/build/style.min.css'
            }
        }
  });

  grunt.loadNpmTasks('grunt-install-dependencies');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  grunt.registerTask('default', ['watch','uglify', 'cssmin']);

};