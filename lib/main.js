var ApiHelpers = require('./api.js');

/**
 * module.exports test helper methods
 *
 * @module TestHelpers
 */
var TestHelpers = {
	/**
	 * API test helper class: exports Loud class of ApiHelpers module
	 *
	 * @class Api
	 * @static
	 * @uses  ApiLoud
	 *
	 */
	Api: ApiHelpers.ApiLoud
};

module.exports = TestHelpers;