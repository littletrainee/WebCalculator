/** @type {number} */
var first = 0;
/** @type {number} */
var second = 0;
/** @type {string} */
var arithmetic = "";
/** @type {boolean} */
var setanother = false;
/** @type {boolean} */
var point = false;
/** @type {boolean} */
var setsecond = false;

/**
 *  Set calculator sign.
 *  @param {string} v
 */
function Arithmetic(v) {
    /** @type {string} */
    let result = "";
    arithmetic = v;// set arithmetic "+-*/"
    second = parseFloat(document.getElementById("Result").innerHTML.split(',').join(''));
    if (!setsecond) {
        first = second;
        setsecond = true;
    } else {
        result = calculate(first, second);
        console.log(result)
        if (result == "DZ") {
            result = "Can't Divide By 0";
        } else {
            first = Number(result);
        }
        document.getElementById("Result").innerHTML = result;
    }
    setanother = true;
}

/**
 * Calculate user input value and return result.
 * @param {number} v1
 * @param {number} v2
 * @returns {string} 
 */
function calculate(v1, v2) {
    switch (arithmetic) {
        case "+":
            return (v1 + v2).toString();
        case "-":
            return (v1 - v2).toString();
        case "*":
            return (v1 * v2).toString();
        case "/":
            if (second == 0) {
                return "DZ";
            } else {
                return (v1 / v2).toString();
            }
        default:
            return "err";
    }
}


/**
 *  Print user Select to Result Label.
 *  @param {string} v
 */
function Print(v) {
    if (v == '.') {
        point = true
    } else {
        /** @type {string} */
        var result = document.getElementById("Result").innerHTML.split(',').join('');
        if (result == 0 || setanother) {
            result = 0;
            setanother = false;
        }
        if (point) {
            result = result + '.' + v;
            point = false;
        } else {
            result += v;
        }
        document.getElementById("Result").innerHTML = parseFloat(result).toLocaleString().toString();
    }
}

// Print Calculate result to Result Label
function Equal() {
    /** @type {string} */
    let result = document.getElementById("Result").innerHTML.split(',').join('');
    if (result == "0") {
        second = 0
    } else {
        second = parseFloat(result);
    }
    result = calculate(first, second)
    console.log(result)
    if (result == "DZ") {
        result = "Can't Divide by 0";
    }
    setsecond = false;

    document.getElementById("Result").innerHTML = result;
    first = 0;
    arithmetic = "";
}

function Clear() {
    first = 0;
    second = 0;
    arithmetic = "";
    setanother = false;
    point = false;
    document.getElementById("Result").innerHTML = 0;
}

/**
 * Add Negative Sign Or Not.
 */
function NegativeSign() {
    /** @type {number} */
    let result = parseFloat(document.getElementById("Result").innerHTML);
    result *= -1;
    document.getElementById("Result").innerHTML = result;
}

/**
 * Convert Value to Percentage.
 */
function ConvertPercentage() {
    /** @type {number} */
    let result = parseFloat(document.getElementById("Result").innerHTML);
    result /= 100;
    document.getElementById("Result").innerHTML = result;
}