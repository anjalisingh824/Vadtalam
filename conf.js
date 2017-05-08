exports.config = {

	directConnect : true,
	framework : 'jasmine',
	specs : [ 'AddUser.js' ],
	capabilities : {
		browserName : 'chrome'
	},
	jasmineNodeOpts : {
		defaultTimeoutInterval : 6000000
	},
	"appenders" : [ {
		"type" : "file",
		"filename" : "/usr/lib/node_modules/log4js/lib/log4js.js",
		"maxLogSize" : 20480,
		"backups" : 3,
		"category" : "relative-logger"
	} ],
}
