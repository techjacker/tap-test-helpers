var _           = require('underscore'),
    test        = require('tap').test,
    TestHelpers = require('./../lib/main.js');

/*--------------------------------------
api exposed tests
---------------------------------------*/
// t.ok(_.isFunction(TestHelpers.Api.methodsExposed)) etc...
var apiMethods = ['methodsExposed'];

TestHelpers.Api.methodsExposed(apiMethods, TestHelpers.Api);