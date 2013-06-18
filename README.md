# tap-test-helpers

[![Build Status](https://secure.travis-ci.org/techjacker/tap-test-helpers.png)](http://travis-ci.org/techjacker/tap-test-helpers)

### Install
```Shell
npm install tap-test-helpers
```

### Docs
[Yuidocs documentation here](docs/index.html)

## API
### Test Helpers API Class

#### ```TestHelpers.Api.methodsExposed(['method', 'names'], module)```

```JavaScript
// 1 test shd fail; Object.twoPot is not exposed
TestHelpers.Api.methodsExposed(['onePot', 'twoPot', 'threePot'], {
	'onePot': function(argument) {},
	'threePot': function(argument) {}
});
```