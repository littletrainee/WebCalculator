/** @type {number} */
var first = 0;
/** @type {number} */
var second = 0;
/** @type {string} */
var arithmetic = "";
/** @type {boolean} */
var another = false;
/** @type {boolean} */
var point = false;

/**
 *  @param {string} v
 */
function Arithmetic(v) {
    arithmetic = v;// set arithmetic "+-*/"
    second = parseFloat(document.getElementById("Result").innerHTML.split(',').join(''));
    first = calculate(first, second)
    another = true;
}

/**
 * @param {number} v1
 * @param {number} v2
 * @returns {number|string} 
 */
function calculate(v1, v2) {
    switch (arithmetic) {
        case "+":
            return v1 + v2;
        case "-":
            return v1 - v2;
        case "*":
            return v1 * v2;
        case "/":
            return v1 / v2;
        default:
            return "err"
    }
}

/** @type {string[]} */
var a;

/**
 *  @param {string} v
 */
function Print(v) {
    if (v == '.') {
        point = true
    } else {
        /** @type {string} */
        var result = document.getElementById("Result").innerHTML.split(',').join('');
        if (result == 0 || another) {
            result = 0;
            another = false;
        }
        if (point) {
            result = result + '.' + v;
            point = false
        } else {
            result += v;
        }
        document.getElementById("Result").innerHTML = parseFloat(result).toLocaleString().toString();
    }
}

function Equal() {
    /** @type {string} */
    var result = "";
    second = parseInt(document.getElementById("Result").innerHTML.split(',').join(''));
    result = calculate(first, second)
    document.getElementById("Result").innerHTML = parseFloat(result).toLocaleString().toString();
    first = 0;
    arithmetic = "";
}

function Clear() {
    first = 0;
    second = 0;
    arithmetic = "";
    another = false;
    point = false;
    document.getElementById("Result").innerHTML = 0;
}

/**
 * @param {string} v
 */
function PostiveOrNagativeAndPercent(v) {
    /** @type {number} */
    var result = parseFloat(document.getElementById("Result").innerHTML);
    if (v == "+/-") {
        result *= -1;
    } else if (v == "%") {
        result /= 100;
    }
    document.getElementById("Result").innerHTML = result;
}
