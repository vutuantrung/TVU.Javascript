/**
 * Data type:
 * undefined: something has not undefined
 * null: nothing
 * boolean: true/false
 * string: text
 * symbol: immutable primitive value
 * number: number
 * object: store data
 */

/**
 * Declare variable: var, let, const
 * var: used all program
 * let: used in scope
 * const: can not be changed
 */

/**
 * CODE OUTPUT
 * \*     single quote
 * \"     double quote
 * \\     backslash
 * \n     new line
 * \r     carriage return
 * \t     tab
 * \b     backspace
 * \f     form feed
 */

/**
 * In array we can store values with any data types
 * Ex: arr = ["Hello", 23, { test: 'value' }, ["second array", 4]]
 */


/**
 * Manipulate arrays
 * shift(): Remove first element and return the it
 * unshift(): Insert new element from the start of array, its oposite with the method push()
 */
{
    let arr = ["hello", 23, {
            test: 'value'
        },
        ["second array", 4]
    ];


    let shiftdArr = arr.shift();
    console.log('Removed element: ' + shiftdArr);
    console.log('Array after shift: ' + arr);

    arr.unshift('this is a new Element');
    console.log('Array after unshift: ' + arr);
}

/**
 * Type coercion means that two values are compared only after attempting to convert them into a common type.
 * There are only six falsy values in JavaScript you should be aware of:
 * false — boolean false
 * 0 — number zero
 * “” — empty string
 * null
 * undefined
 * NaN — Not A Number
 */

/**
 * Falsy Value Comparison:
 * 
 * 1.
 * false == 0 - true
 * 0 == "" - true
 * "" == false - true
 * 
 * 2.
 * null == null - true
 * undefined == undefined - true
 * null == undefined - true
 * 
 * 3.
 * NaN == null - true
 * NaN == undefined - false
 * NaN == NaN - false
 * 
 * 4. false, zero and empty strings are all equivalent
 * 5. null and undefined are equivalent to themselves and each other but nothing else
 * 6. NaN is not equivalent to anything – including another NaN
 * 7. Infinity is truthy – but cannot be compared to true or false
 * 8. An empty array is truthy – yet comparing with true is false and comparing with false is true
 */


/**
 * Delete object property
 * Use 'delete' key word
 */
{
    var obj = {
        'module1': 23,
        'module2': 'test'
    };

    console.log(obj);

    delete obj.module1;

    console.log(obj);
}

/**
 * Checking if existing object property
 * using [Object].hasOwnProperty(<property name>)
 */

{
    var obj = {
        'module1': 23,
        'module2': 'test'
    };

    console.log('obj has property module: ' + obj.hasOwnProperty('module'));
    console.log('obj has property module1: ' + obj.hasOwnProperty('module1'));
}


/**
 * Object.freeze()
 * A frozen object can no longer be changed;
 */

function freezeObj() {
    'use strict';
    const MATH_CONSTANT = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANT);

    try {
        MATH_CONSTANT.PI = 0;
    } catch (ex) {
        console.log('MATH_CONSTANT PI can not be changed');
    }

    console.log(MATH_CONSTANT.PI);
}

freezeObj();

/**
 * REST Operator with function parameters
 * function func(...args){}
 */

{
    const sum = (function () {
        return function sum(...args) {
            return args.reduce((a, b) => a + b);
        };
    })();

    console.log(sum(1, 2, 3));
    console.log(sum(1, 2, 3, 4));

    const spreadArray = (function () {
        return function spreadArray() {
            let arr1 = [1, 2, 3, 5];
            let arr2 = [...arr1];

            arr1[2] = 'this value is changed';

            console.log(arr1);
            console.log(arr2);
        };
    })();

    spreadArray();
}

/**
 * DESTRUCTOR object
 */

{
    // Example
    let obj = {
        x: 3.5,
        y: 3.5,
        z: 'heelo'
    };

    const {
        x: firstParam,
        y: secondParam
    } = obj;

    console.log('firstParam: ' + firstParam);
    console.log('secondParam: ' + secondParam);
}

{
    // With object
    let LOCAL_FORECAST = {
        today: {
            min: 72,
            max: 83
        },
        tomorrow: {
            min: 73.3,
            max: 85
        }
    };

    const {
        tomorrow: {
            max: maxTomorrow,
            min: minTomorrow
        }
    } = LOCAL_FORECAST;

    console.log('maxTomorrow: ' + maxTomorrow);
    console.log('minTomorrow: ' + minTomorrow);
}

{
    // Switch value in array
    const [z, , y, x] = [1, 2, 3, 5];
    console.log(z, x, y);

    // Switch
    let a = 7,
        b = 4;
    console.log('before switch: ' + a + ', ' + b);

    (() => {
        'use strict';
        [a, b] = [b, a];
    })();
    console.log('after switch: ' + a + ', ' + b);
}

{
    // Re-assign array
    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const removeFirstTwo = (function () {
        return function removeFirstTwo(list) {
            const [, , ...arr] = list;
            return arr;
        };
    })();

    const arr = removeFirstTwo(source);

    console.log(arr);
    console.log(source);
}

{
    // Passing parameters
    // This often used when calling API
    const stats = {
        ver: '1.0.0',
        max: 45.65,
        min: 2.5
    };

    const passingParamFunc = (function () {
        return function passingParamFunc({
            max,
            min
        }) {
            return (min + max) / 2;
        }
    })();

    console.log(passingParamFunc(stats));
}

{
    // Create new class
    const createNewPerson = (name, age, gender) => ({
        name,
        age,
        gender
    });

    console.log(createNewPerson('ToRung', 27, 'male'));
}

/**
 * Class getter and setter
 */
{
    class Book {
        constructor(author) {
            this._author = author;
        }
        
        get writer() {
            return this._author;
        }

        set writer(updatedAuthor) {
            this._author = updatedAuthor;
        }
    }
}

/**
 * Difference between import and require
 * 
 * import:
 * - get some of objects from a file
 * - use import * to get everthing from a file
 * 
 * require:
 * - get all the objects from a file
 * 
 * 
 * 
 * 
 */

