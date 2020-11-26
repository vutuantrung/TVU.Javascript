const forLoopsModule = require('./loop.module');

//const chai = require('chai');
const assert = require('assert');
//const should = chai.should();
//const expect = chai.expect;

var PARAM = 1;

function increaseParam(param) {
    return param + 1;
}

describe('For loops normal test', function () {
    it('normal loops should return right value', function () {
        var test = forLoopsModule.normalState(PARAM, 10, increaseParam);
        assert.equal(test, 12);
    });
});