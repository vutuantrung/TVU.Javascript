var forLoopsMethod_normalState = (param, endIndex, event) => {
    for (let i = 0; i <= endIndex; i++) {
        param = event(param);
    }

    return param;
};

var forLoopsMethod_loopInfinite = (param, endCondition, event) => {
    for (;;) {
        if (endCondition) {
            event(param);
            break;
        }
    }

    return param;
};

var forLoopsMethod_baseCounter = (param, endIndex, event) => {
    for (let i = 0;; i++) {
        event(param);
        if (i > endIndex) {
            break;
        }
    }

    return param;
};

var newStatement = (param) => {
    return param + 1;
};

var forLoopsMethod_multipleStatement = (param, endIndex, event) => {
    for (let i = 0; i < endIndex; i++, newStatement(param)) {
        event(param);
    }

    return param;
};

module.exports = {
    normalState: forLoopsMethod_normalState,
    loopInfinite: forLoopsMethod_loopInfinite,
    baseCounter: forLoopsMethod_baseCounter,
    multipleStatement: forLoopsMethod_multipleStatement
};