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

// In JavaScript, a statement can be labeled when a label_name: is prepended to a statement.
// Because a for loop is a statement you can label for loops.
var labelLoops = (param, mainEnd, innerEnd, event) => {
    main: for (let i = 0; i < mainEnd; i++)
        inner: for (let j = 0; j < innerEnd; j++) {
            param = event(param);
            if (i === 2) break main;
        }

    return param;
};

module.exports = {
    normalState: normalState,
    loopInfinite: loopInfinite,
    baseCounter: baseCounter,
    multipleStatement: multipleStatement,
    labelLoops: labelLoops
};