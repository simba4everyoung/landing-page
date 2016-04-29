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
			all: 'js/functions/*.js'
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
					'js/functions/icons.js': ['images/assets.svg']
				}
			},
			options: {
				container: '#icon-container'
			}
		},

		//Task - Merge Scripts
		concat: {
			vendorJs: {
				src: [
					"plugins/jquery/jquery-2.1.4.min.js",
		         	"plugins/jquery-ui/jquery-ui.min.js",
		         	"plugins/bootstrap/js/bootstrap.min.js",
		         	"plugins/jquery-slimscroll/jquery.slimscroll.min.js",
		         	"plugins/uniform/jquery.uniform.min.js",
		         	"plugins/wow/wow.min.js"
			    ],
			    dest: 'js/landing-vendor.js'
			},
			vendorCss: {
				src: [
					"plugins/uniform/css/uniform.default.min.css",
        			"plugins/bootstrap/css/bootstrap.min.css",
        			"plugins/fontawesome/css/font-awesome.css"

				],
				dest: 'sass/base/_vendor.scss'
			},
			myjs: {
				src: 'js/functions/*.js',
				dest: 'js/landing-main.js'
			}
		},

		//Task - Remove Unused CSS Rules
		// uncss: {
		// 	options: {
		// 		ignore: ['.navbar.whiteHeader', '.whiteHeader .navbar-mobile ul li a']
		// 	},
		// 	dist: {
		// 		files: {
		// 			'css/landing.css': 'index.html'
		// 		}
		// 	}
		// },

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
					'svginjector',
					'concat:myjs'
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
				files: 'js/functions/*.js',
				tasks: ['jshint', 'concat:myjs']
			}
		}


	});

	grunt.registerTask('default', ['']); 
}