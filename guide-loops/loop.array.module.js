var arrForEeach = (data, event) => {
    if (!Array.isArray(data)) throw new Error('data is not array');

    let arr = [];
    data.forEach((item, index, object) => {
        arr.push({
            idx: index,
            value: event(item)
        });
    });

    return arr;
};

var arrEveryReturnNewValue = (data, event) => {
    if (!Array.isArray(data)) throw new Error('data is not array');

    let arr = [];
    data.every(e => arr.push(event(e)));

    return arr;
};

var arrEveryVerify = (data, condition) => {
    if (!Array.isArray(data)) throw new Error('data is not array');
    return data.every(e => condition(e));
};

var arrSomeVerify = (data, condition) => {
    if (!Array.isArray(data)) throw new Error('data is not array');
    return data.some(e => condition(e));
};

/**
 * @param {Array<any>} data 
 * @param {Function} condition
 * @returns new array consisting only of items that passed a condition.
 */
var arrFilter = (data, condition) => {
    if (!Array.isArray(data)) throw new Error('data is not array');
    return data.filter(e => condition(e));
};

/**
 * @param {Array<any>} data
 * @param {Function} event
 * @returns an object of the original array and modified array
 * 
 * Array.map return a copy of the original array with modified values (if any.)
 * Array.map is like Array.forEach but it returns a copy of the modified array.
 * Note that the original array is still unchanged.
 */
var arrMap = (data, event) => {
    if (!Array.isArray(data)) throw new Error('data is not array');
    return {
        origninal: data,
        modified: data.map(e => event(e))
    };
};

var arrReduce = (data, currentValue, reducer) => {
    if (!Array.isArray(data)) throw new Error('data is not array');
    return currentValue != null ? data.reduce(reducer, currentValue) : data.reduce(reducer);
};


module.exports = {
    arrForEeach: arrForEeach,
    arrEveryReturnNewValue: arrEveryReturnNewValue,
    arrEveryVerify: arrEveryVerify,
    arrSomeVerify: arrSomeVerify,
    arrFilter: arrFilter,
    arrMap: arrMap,
    arrReduce: arrReduce
};