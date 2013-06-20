# tap-test-helpers

[![Build Status](https://secure.travis-ci.org/techjacker/tap-test-helpers.png)](http://travis-ci.org/techjacker/tap-test-helpers)

### Install
```Shell
npm install tap-test-helpers
```

### Docs
[Yuidocs documentation here](docs/index.html)
- link only works when checkout repo and preview README locally

## API Summary
```TestHelper = require.('tap-test-helpers');```

### Api Helper Class

#### ```.Api.methodsExposed(['method', 'names'], module)```

```JavaScript
// 1 test shd fail; Object.twoPot is not exposed
TestHelper.Api.methodsExposed(['onePot', 'twoPot', 'threePot'], {
	'onePot': function(argument) {},
	'threePot': function(argument) {}
});
```

### Oop Helper Class

#### ```.Api.inheritsCheckProto(['method', 'names'], module)```

```JavaScript
function A() {};
A.prototype.foo = function(x, y) {
	return x + y;
};

function B() {};
B.prototype.foo = function(x, y) {
	return 2 + this.super_.foo(x, y);
};

// all tests PASS
require.('extasy').extendCtor(B, A);
TestHelper.Oop.inheritsCheckProto(B, A);
```