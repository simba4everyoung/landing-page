module.exports = function(grunt) {
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		//Task - Http Server
		connect: {
			server : {
				options: {
					port: 9001,
					hostname: 'localhost',
					base: '.',
					keepalive: 'true'
				}
			}
		},

		//Task - Compile SASS
		sass: {
			options: {
				sourcemap: 'file',
			},
			dev: {
				files: {
					'css/landing.css': 'sass/landing.scss'
				}
			}
		},

		//Task - JSLint, JSHint
		jshint: {
			all: ['js/*.js']
		},

		//Task - Create SVG System
		svgstore: {
			options: {
				svg: {
					style: 'display: none;',
					viewBox: '0 0 500 500',
					x: '0px',
					y: '0px'
				},
				includedemo: false,
				includeTitleElement: false,
				preserveDescElement: false,
				cleanup: true,
				prefix: 'icon-'
			},
			default: {
				files: {
					'images/assets.svg' : ['images/svg-store/*.svg']
				}
			}
		},

		//Task - Inject SVG files into HTML
		svginjector: {
			icons: {
				files: {
					'js/icons.js': ['images/assets.svg']
				}
			},
			options: {
				container: '#icon-container'
			}
		},

		//Grunt Watch
		watch: {
			options: {
				reload: true,
				atBegin: true,
				livereload: 8020
			},
			svg: {
				files: [
					'images/svg-store/*.svg'
				],
				tasks: [
					'svgstore',
					'svginjector'
				]

			},
			css: {
				files: [
					'sass/*.scss',
					'sass/**/_*.scss'
				],
				tasks: ['sass']
			},
			js: {
				files: ['js/*.js'],
				tasks: ['jshint']
			}
		}


	});

	grunt.registerTask('default', ['']); 
}