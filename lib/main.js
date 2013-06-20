var ApiHelpers = require('./api.js');
var OopHelpers = require('./oop.js');

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
	Api: ApiHelpers.ApiLoud,
	/**
	 * OOP test helper class: exports Loud class of ApiHelpers module
	 *
	 * @class Oop
	 * @static
	 * @uses  OopLoud
	 *
	 */
	Oop: OopHelpers.OopLoud
};

module.exports = TestHelpers;