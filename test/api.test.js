var _                    = require('underscore'),
    tap                  = require('tap'),
    test                 = tap.test,
    tapProducer          = tap.Producer,
    ApiTestHelpers       = require('./../lib/api.js'),
    methodsExposed       = ApiTestHelpers.ApiLoud.methodsExposed;
    methodsExposedSilent = ApiTestHelpers.ApiSilent.methodsExposed;


/*--------------------------------------
api exposed tests
---------------------------------------*/
test('Api.methodsExposed is exposed correctly (how meta)', function (t) {
	t.ok(_.isFunction(methodsExposed), 'normal (loud) test function is exposed');
	t.ok(_.isFunction(methodsExposedSilent.test), 'silent test function is exposed');
	t.end();
});


/*--------------------------------------
silent tests
---------------------------------------*/
var fixtFnNamesArr = ['onePot', 'twoPot', 'threePot'],
	fixtApiObj = {
		'onePot': function(argument) {},
		'threePot': function(argument) {}
	};

methodsExposedSilent.Producer.on("end", function (er, total, ok) {
	var res = this.results;
	// console.log('res', res);
	test('API.methodsExposed silent tests', function (t) {
		t.equal(res.passTotal, 2, '2 tests shd have passed');
		t.equal(res.failTotal, 1, '1 test shd have failed: .twoPot is not exposed');
		t.equal(res.testsTotal, 3, '3 tests in total shd have been undertaken');
		t.end();
	});
});

methodsExposedSilent.test(fixtFnNamesArr, fixtApiObj);
// ApiTestHelpers.methodsExposed(fixtFnNamesArr, fixtApiObj); // loud test