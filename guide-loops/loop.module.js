var normalState = (param, endIndex, event) => {
    for (let i = 0; i <= endIndex; i++) {
        param = event(param);
    }

    return param;
};

var loopInfinite = (param, endingCondition, event) => {
    for (;;) {
        if (endingCondition(param)) break;
        param = event(param);
    }

    return param;
};

var baseCounter = (param, endIndex, event) => {
    for (let i = 0;; i++) {
        param = event(param);
        if (i >= endIndex) break;
    }

    return param;
};

var newStatement = (param) => {
    return param + 1;
};

var multipleStatement = (param, endIndex, event) => {
    for (let i = 0; i < endIndex; i++, newStatement(param)) {
        param = event(param);
    }

    return param;
};

module.exports = {
    normalState: normalState,
    loopInfinite: loopInfinite,
    baseCounter: baseCounter,
    multipleStatement: multipleStatement
};