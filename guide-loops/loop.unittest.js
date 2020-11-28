const forLoopsModule = require('./loop.module');

//const chai = require('chai');
const assert = require('assert');
//const should = chai.should();
//const expect = chai.expect;

var PARAM = 1;

function increaseParam(param) {
    return param + 1;
}

function endingCondition(param) {
    if (param >= 10) return true;
}

describe('For loops test', function () {
    it('normal loops should return right value', function () {
        var value = forLoopsModule.normalState(PARAM, 10, increaseParam);
        assert.strictEqual(value, 12);
    });

    it('infinite loops should return right value and stop with ending condition', function () {
        var value = forLoopsModule.loopInfinite(PARAM, endingCondition, increaseParam);
        assert.strictEqual(value, 10);
    });

    it('base conter for loops should return right value', function () {
        var value = forLoopsModule.baseCounter(PARAM, 100, increaseParam);
        assert.strictEqual(value, 102);
    });

    it('new statement for loops should return right value', function () {
        var value = forLoopsModule.multipleStatement(PARAM, 100, increaseParam);
        assert.strictEqual(value, 101);
    });
});