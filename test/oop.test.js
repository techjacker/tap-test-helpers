var _                    = require('underscore'),
    tap                  = require('tap'),
    test                 = tap.test,
    tapProducer          = tap.Producer,
    Helper       		 = require('./../lib/oop.js'),
    inheritsCheckProto       = Helper.OopLoud.inheritsCheckProto;
    inheritsCheckProtoSilent = Helper.OopSilent.inheritsCheckProto;


/*--------------------------------------
api exposed tests
---------------------------------------*/
test('Oop.inheritsCheckProto is exposed correctly', function (t) {
	t.ok(_.isFunction(inheritsCheckProto), 'normal (loud) test function is exposed');
	t.ok(_.isFunction(inheritsCheckProtoSilent.test), 'silent test function is exposed');
	t.end();
});


/*--------------------------------------
silent tests
---------------------------------------*/
// function A() {};
// A.prototype.foo = function(x, y) {
// 	return x + y;
// };

// function B() {};
// B.prototype.foo = function(x, y) {
// 	return 2 + this.super_.foo(x, y);
// };

// require.('extasy').extendCtor(B, A);

// // all tests PASS
// require.('tap-test-helpers').Oop.inheritsCheckProto(B, A);
//
//
//
//
// inheritsCheckProtoSilent.Producer.on("end", function (er, total, ok) {
// 	var res = this.results;
// 	// console.log('res', res);
// 	test('API.inheritsCheckProto silent tests', function (t) {
// 		t.equal(res.passTotal, 2, '2 tests shd have passed');
// 		t.equal(res.failTotal, 1, '1 test shd have failed: .twoPot is not exposed');
// 		t.equal(res.testsTotal, 3, '3 tests in total shd have been undertaken');
// 		t.end();
// 	});
// });

// inheritsCheckProtoSilent.test(A, B);