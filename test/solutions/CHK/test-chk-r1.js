var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');

describe('CHK challenge: SKUS', function() {
	it('should return correct value', function() {
	    assert.equal(checkout("A"), 50);
        assert.equal(checkout(" "), -1);
	});
});