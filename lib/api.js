var _    = require('underscore'),
    test = require('tap').test,
    wrap = require('tap-wrapper');

/**
 * API / module.exports test helper methods
 *
 * @module ApiHelpers
 */
var ApiHelpers = {
	/**
	 * Silent tests - not printed to STDOUT.
	 * Instead the results are returned in JSON format in tap.Producer.on('end') evt
	 *
	 * @class ApiSilent
	 */
	ApiSilent: {},
	/**
	 * Class of tests that print results to STDOUT
	 *
	 * @class ApiLoud
	 * @extensionfor TestHelpers
	 */
	ApiLoud: {}
};

/**
 * ### Is the api correctly exposed?
 * Checks that all keys in array are present on the object and are functions.
 *
 * @example
 * 	// 1 test shd fail; Object.twoPot is not exposed
 * 	ApiTestHelpers.methodsExposed(['onePot', 'twoPot', 'threePot'], {
 * 		'onePot': function(argument) {},
 * 		'threePot': function(argument) {}
 * 	});
 *
 * @method methodsExposed
 *
 * @param  {array} arrayofFnNames list of api methods that shd be exposed
 * @param  {Object} apiObj         object literal that contains api methods
 *
 * @return {Test}                tap.test function is returned
 */
var methodsExposed = function (arrayofFnNames, apiObj) {
	return test('API methods exposed', function (t) {
		_(arrayofFnNames).each(function (val) {
			t.ok(_.isFunction(apiObj[val]), val + ' fn is exposed');
		});
		this.end(t);
	}.bind(this));
};

ApiHelpers.ApiLoud.methodsExposed = wrap.WrapLoud(methodsExposed);
ApiHelpers.ApiSilent.methodsExposed = wrap.WrapSilent(methodsExposed);

module.exports = ApiHelpers;