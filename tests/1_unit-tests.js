const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests', function () {
	suite('Basic Assertions', function () {
		/** 1 - Use assert.isNull() or assert.isNotNull() to make the tests pass. **/
		test('#isNull, #isNotNull', function () {
			assert.isNull(
				null,
				'this is an optional error description - e.g. null is null',
			);
			assert.isNotNull(1, '1 is not null');
		});
	});
	// -----------------------------------------------------------------------------
});
