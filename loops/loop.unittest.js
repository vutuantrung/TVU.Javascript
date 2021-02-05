const forLoopsModule = require('./moduleLoopFor');
const forofLoopsModule = require('./moduleLoopForOf');
const arrModule = require('./moduleLoopArray');

//const chai = require('chai');
const assert = require('assert');
//const should = chai.should();
//const expect = chai.expect;

const PARAM = 0;

function increaseParam(param) {
  return param + 1;
}

function endingCondition(param) {
  if (param >= 10) return true;
}

describe('For loops test', function () {
  it('normal loops should return right value', function () {
    var value = forLoopsModule.normalState(PARAM, 10, increaseParam);
    assert.strictEqual(value, 11);
  });

  it('infinite loops should return right value and stop with ending condition', function () {
    var value = forLoopsModule.loopInfinite(
      PARAM,
      endingCondition,
      increaseParam
    );
    assert.strictEqual(value, 10);
  });

  it('base conter for loops should return right value', function () {
    var value = forLoopsModule.baseCounter(PARAM, 100, increaseParam);
    assert.strictEqual(value, 101);
  });

  it('new statement for loops should return right value', function () {
    var value = forLoopsModule.multipleStatement(PARAM, 100, increaseParam);
    assert.strictEqual(value, 100);
  });

  it('label loops for loops should return right value', function () {
    var value = forLoopsModule.labelLoops(PARAM, 20, 10, increaseParam);
    assert.strictEqual(value, 21);
  });
});

describe('For of loops test', function () {
  it('should return object properies, valeus and entries', function () {
    let obj = {
      test1: 23,
      innerObj: {
        property: [23, 25],
      },
      arr: [2, 'thisistestingscript', 55, 8],
      method: () => {},
    };

    let valueReturn = forofLoopsModule.getObjectProperty(obj);

    assert.strictEqual(valueReturn.propertyArr.length, 4);

    assert.strictEqual(valueReturn.propertyArr[0], 'test1');
    assert.strictEqual(valueReturn.propertyArr[1], 'innerObj');
    assert.strictEqual(valueReturn.propertyArr[2], 'arr');
    assert.strictEqual(valueReturn.propertyArr[3], 'method');

    assert.strictEqual(valueReturn.valuesArr[0], 23);
    assert.strictEqual(typeof valueReturn.valuesArr[0], 'number');

    assert.strictEqual(typeof valueReturn.valuesArr[1], 'object');
    assert.strictEqual(typeof valueReturn.valuesArr[1].property, 'object');
    assert.strictEqual(valueReturn.valuesArr[1].property[0], 23);
    assert.strictEqual(valueReturn.valuesArr[1].property[1], 25);

    assert.strictEqual(typeof valueReturn.valuesArr[2], 'object');
    assert.strictEqual(valueReturn.valuesArr[2][0], 2);
    assert.strictEqual(valueReturn.valuesArr[2][1], 'thisistestingscript');
    assert.strictEqual(valueReturn.valuesArr[2][2], 55);
    assert.strictEqual(valueReturn.valuesArr[2][3], 8);

    assert.strictEqual(typeof valueReturn.valuesArr[3], 'function');
  });
});

const addCharacter = val => {
  let newCharcter = '_!';
  return val.toString() + newCharcter;
};

const isNumber = val => {
  return Number.isInteger(val);
};

const isString = val => {
  return typeof val === 'string';
};

const greaterThan = val => {
  return Number.isInteger(val) && val >= 10;
};

const arrayEquals = (arr1, arr2) => {
  if (!Array.isArray(arr1)) return false;
  if (!Array.isArray(arr2)) return false;
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] !== typeof arr2[i]) return false;
    if (arr1[i].toString() !== arr2[i].toString()) return false;
  }

  return true;
};

describe('Array tests', function () {
  it('array foreach should return the right array', function () {
    let val = arrModule.arrForEeach(
      ['ajhfb', 23, function () {}, () => {}],
      addCharacter
    );

    assert.strictEqual(val.length, 4);

    assert.strictEqual(typeof val[0], 'object');
    assert.strictEqual(val[0].idx, 0);
    assert.strictEqual(val[0].value, 'ajhfb_!');

    assert.strictEqual(typeof val[1], 'object');
    assert.strictEqual(val[1].idx, 1);
    assert.strictEqual(val[1].value, '23_!');

    assert.strictEqual(typeof val[2], 'object');
    assert.strictEqual(val[2].idx, 2);
    assert.strictEqual(val[2].value, 'function () {}_!');

    assert.strictEqual(typeof val[3], 'object');
    assert.strictEqual(val[3].idx, 3);
    assert.strictEqual(val[3].value, '() => {}_!');
  });

  it('array every should return the right array', function () {
    let val = arrModule.arrEveryReturnNewValue(
      ['ajhfb', 23, function () {}, () => {}],
      addCharacter
    );

    assert.strictEqual(val.length, 4);

    assert.strictEqual(val[0], 'ajhfb_!');
    assert.strictEqual(val[1], '23_!');
    assert.strictEqual(val[2], 'function () {}_!');
    assert.strictEqual(val[3], '() => {}_!');
  });

  it('array every should verify the data', function () {
    assert.strictEqual(
      arrModule.arrEveryVerify([1, 5, 9, 4, 3], isNumber),
      true
    );
    assert.strictEqual(
      arrModule.arrEveryVerify([1, 5, 9, () => {}, 3], isNumber),
      false
    );
    assert.strictEqual(
      arrModule.arrEveryVerify([1, 5, '9', 4, 3], isNumber),
      false
    );
    assert.strictEqual(
      arrModule.arrEveryVerify([1, 5, 9, 6, 3], isNumber),
      true
    );
  });

  it('array some should verify the data', function () {
    assert.strictEqual(
      arrModule.arrSomeVerify([1, 5, 9, 4, 3], isString),
      false
    );
    assert.strictEqual(
      arrModule.arrSomeVerify([1, 5, 9, () => {}, 3], isString),
      false
    );
    assert.strictEqual(
      arrModule.arrSomeVerify([1, 5, 'thisisaTest', 4, 3], isString),
      true
    );
    assert.strictEqual(
      arrModule.arrSomeVerify([1, 5, 9, 6, 3], isString),
      false
    );
  });

  it('array filter should return the array valid condition', function () {
    let result = arrModule.arrFilter([1, 5, 9, 4, 3], greaterThan);
    assert.strictEqual(result.length, 0);

    result = arrModule.arrFilter([1, 5, 69, () => {}, 3], greaterThan);
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result.includes(69), true);

    result = arrModule.arrFilter([1, 15, 'thisisaTest', 1, 3], greaterThan);
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result.includes(15), true);

    result = arrModule.arrFilter([1, 5, 69, () => {}, 96], greaterThan);
    assert.strictEqual(result.length, 2);
    assert.strictEqual(result.includes(69), true);
    assert.strictEqual(result.includes(96), true);
  });

  it('array map should return the orignial array and its modified version', function () {
    let arr = [1, 5, 9, 4, 3];
    let result = arrModule.arrMap(arr, increaseParam);

    assert.strictEqual(typeof result, 'object');
    assert.strictEqual(arrayEquals(arr, result.origninal), true);
    assert.strictEqual(arrayEquals([2, 6, 10, 5, 4], result.modified), true);
  });

  it('array reduce should return the right value', function () {
    {
      const reducer = (acc, cur) => acc + cur;

      let arr = [1, 5, 9, 4, 3];
      let result = arrModule.arrReduce(arr, 10, reducer);

      assert.strictEqual(result, 32);
    }

    {
      const reducer = (acc, cur) => Math.max(acc.value, cur.value);

      let arr = [
        {
          value: 2,
        },
        {
          value: 5,
        },
        {
          value: 22,
        },
        {
          value: 213,
        },
      ];

      let result = arrModule.arrReduce(arr, 10, reducer);
      assert.strictEqual(isNaN(result), true);

      arr = [
        {
          value: 2,
        },
        {
          value: 5,
        },
      ];

      result = arrModule.arrReduce(arr, null, reducer);
      assert.strictEqual(isNaN(result), false);
      assert.strictEqual(result, 5);
    }
  });
});
