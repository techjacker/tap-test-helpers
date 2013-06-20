var _           = require('underscore'),
    test        = require('tap').test,
    TestHelpers = require('./../lib/main.js'),
    checkExposed = TestHelpers.Api.methodsExposed;

/*--------------------------------------
api exposed tests
---------------------------------------*/
// t.ok(_.isFunction(TestHelpers.Api.methodsExposed)) etc...
var apiMethods = ['methodsExposed'];
var oopMethods = ['inheritsCheckProto'];

checkExposed(apiMethods, TestHelpers.Api);
checkExposed(oopMethods, TestHelpers.Oop);