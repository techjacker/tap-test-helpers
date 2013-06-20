var _    = require('underscore'),
    test = require('tap').test,
    wrap = require('tap-wrapper');

/**
 * API / module.exports test helper methods
 *
 * @module OopHelpers
 */
var OopHelpers = {
	/**
	 * Silent tests - not printed to STDOUT.
	 * Instead the results are returned in JSON format in tap.Producer.on('end') evt
	 *
	 * @class OopSilent
	 */
	OopSilent: {},
	/**
	 * Class of tests that print results to STDOUT
	 *
	 * @class OopLoud
	 * @extensionfor TestHelpers
	 */
	OopLoud: {}
};

/**
 * Check protoype chain is correctly set up
 *
 * @example
 * 	function A() {};
 * 	A.prototype.foo = function(x, y) {
 * 		return x + y;
 * 	};
 *
 * 	function B() {};
 * 	B.prototype.foo = function(x, y) {
 * 		return 2 + this.super_.foo(x, y);
 * 	};
 *
 * 	require.('extasy').extendCtor(B, A);
 *
 * 	// all tests PASS
 * 	require.('tap-test-helpers').Oop.inheritsCheckProto(B, A);
 *
 *
 * @method inheritsCheckProto
 * @param  {Class} Child  The child class
 * @param  {Class} Parent The parent class
 *
 */
var inheritsCheckProto = function (Child, Parent) {
	return test('check prototype chain', function(t) {
		var Inst = new Child();
		t.ok(Inst.constructor === Child, 'Inst.constructor === Child');
		t.ok(Inst.super_ === Parent.prototype, 'Inst.super_ === Parent.prototype');
		t.ok(Object.getPrototypeOf(Inst) === Child.prototype, 'Object.getPrototypeOf(Inst) === Child.prototype');
		t.ok(Object.getPrototypeOf(Object.getPrototypeOf(Inst)) === Parent.prototype, 'Object.getPrototypeOf(Object.getPrototypeOf(Inst)) === Parent.prototype');
		t.ok(Inst instanceof Child, 'Inst instanceof Child');
		t.ok(Inst instanceof Parent, 'Inst instanceof Parent');
		this.end(t);
	}.bind(this));
};

OopHelpers.OopLoud.inheritsCheckProto = wrap.WrapLoud(inheritsCheckProto);
OopHelpers.OopSilent.inheritsCheckProto = wrap.WrapSilent(inheritsCheckProto);

module.exports = OopHelpers;