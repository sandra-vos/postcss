module.exports = function(grunt) {

  // Configure task(s)
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            target: {
                expand: true,
                cwd: 'scss',
                src: '**/*.scss',
                dest: 'css',
                ext: '.css',
            },
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9']
            },
            target: {
                expand: true,
                cwd: 'css',
                flatten: true,
                src: '**/*.css',
                dest: 'autoprefixer/',
                ext: '.css'
            }
        },
        watch: {
            css: {
                files: '/scss/*.scss',
                tasks: ['sass', 'autoprefixer'],
            },
        },
        cssmin: {
            target: {
                expand: true,
                cwd: 'autoprefixer',
                src: ['**/*.css'],
                dest: 'minified',
                ext: '.min.css'
            }
        },
        concat: {
            dist: {
               src: ['minified/**/*.min.css'],
               dest: 'concat/style.min.css',
            },
        },
    });

  // cd ~/Projecten/postcss
  // npm init -y

  // Load the plugins
  // npm install grunt-postcss --save-dev
  grunt.loadNpmTasks('grunt-postcss');
  // npm install grunt-contrib-sass --save-dev
  grunt.loadNpmTasks('grunt-contrib-sass');
  // npm install grunt-contrib-concat --save-dev
  grunt.loadNpmTasks('grunt-contrib-concat');
  // npm install grunt-contrib-watch --save-dev
  grunt.loadNpmTasks('grunt-contrib-watch');
  // npm install grunt-autoprefixer --save-dev
  grunt.loadNpmTasks('grunt-autoprefixer');
  // npm install grunt-contrib-cssmin --save-dev
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // npm install grunt-contrib-uglify --save-dev
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register task(s).
  // commando: grunt
  grunt.registerTask('default', ['watch', 'sass', 'autoprefixer']);
  // commando: grunt build
  grunt.registerTask('build', ['sass', 'autoprefixer', 'cssmin', 'concat']);

};
