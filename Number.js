/**
 * Kiểu số (Number) trong JavaScript
 * 1 . Tạo giá trị Number
 *  - Các cách tạo
 *  - Dùng cách nào ? Tại sao ?
 *  - Kiểm tra Data type
 * 2 . Làm việc với Number
 *  - To string
 *  - To Fixed
 */

let age = 18;
let PI = 3.1416; 
console.log(age);
console.log(typeof age.toString())
console.log(PI.toFixed())
console.log(PI.toFixed(2))
console.log(PI.toFixed(3))
console.log(typeof age.toFixed())


function isNumber(value)
{
    return Number.isFinite(value);
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

// Tuy nhiên, trong JavaScript thì kiểu của NaN cũng là number:
console.log(typeof NaN);

function isNumber(value)
{
    if(Number.isNaN(value))
    {
        return false;
    }else
    {
        return Number.isFinite(value);
    }
}



// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false