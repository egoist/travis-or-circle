'use strict'
var path = require('path')
var yaml = require('yamljs')
var cwd = require('cwd')
var exists = require('path-exists')

function dir(file, fp) {
	return fp ? path.resolve(fp, file) : cwd(file)
}

module.exports = function (fp) {
	var travis = dir('.travis.yml', fp)
	var circle = dir('circle.yml', fp)

	if (exists.sync(travis)) {
		var travisObj = yaml.load(travis)
		if (travisObj) {
			return travisObj.node_js
		}
	} else if (exists.sync(circle)) {
		var circleObj = yaml.load(circle)
		if (circleObj.test.override) {
			var versions = []
			circleObj.test.override.every(function (line) {
				const matched = line.match(/use\s+(.*)\s+&&/)
				if (matched && matched[1]) {
					versions.push(matched[1])
					return true
				}
				versions = null
				return false
			})
			return versions
		}
		var version = circleObj.machine &&
			circleObj.machine.node &&
			circleObj.machine.node.version
		if (version) {
			return [version]
		}
	}

	return null
}
