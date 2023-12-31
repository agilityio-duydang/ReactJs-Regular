/**
 * Kiểu dữ liệu trong JavaScript
 * 
 * 1 . Kiểu dữ liệu nguyên thuỷ - Primitive Data
 *  - Number
 *  - String
 *  - Boolean
 *  - Undefined
 *  - Null
 *  - Symbol
 * 
 * 2 . Kiểu dữ liệu phức tạp - Complex Data
 *  - Function
 *  - Object
 */

// Number
var a = 1;
console.log(typeof a);

// String

var b = 'Duy \'Đặng';
console.log(typeof b);

// Boolean

var c = true;
console.log(typeof c);

// Undefined

var d = undefined;
console.log(typeof d);

// Null

var e = null;
console.log(typeof e);

// Symbol

var f = Symbol();
console.log(typeof f);

// Function

const myFunction = function(){
    console.log(typeof myFunction);
};

myFunction();

// Object

const myObject = {
    name: 'Duy',
    age: 20,
    address: 'Hà Nội',
    city: 'Hà Nội',
    myFunction : function()
    {
        console.log(typeof myFunction);
    }
};

console.log(typeof myObject);

var myArray = [
    'JavaScript',
    'HTML',
    'CSS'
];

console.log(typeof myArray);

//Kết quả trả về của typeof sẽ luôn là 1 chuỗi

// Toán tử so sánh
/**
 * === --> So sánh tuyệt đối gồm Giá trị và Data Type
 * !--
 */

var a = '1';
var b = 1;
console.log(a==b);
console.log(a===b);


//Truthy và Falsy là gì?

// Truthy - to bool is true
// Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy

console.log(Boolean(1)) // true
console.log(Boolean(['BMW'])) // true
console.log(Boolean({ name: 'Miu' })) // true

console.log(!!'hi') // true

// Falsy - to bool is false
// Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy

// Trong Javascript có 6 giá trị sau được coi là Falsy:

// false
// 0 (số không)
// '' or "" (chuỗi rỗng)
// null
// undefined
// NaN

console.log(!!false) // false
console.log(!!0) // false
console.log(!!'') // false
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!NaN) // false


// Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, kể cả những giá trị sau:

// '0' (một chuỗi chứa số không)
// ' ' (một chuỗi chứa dấu cách)
// 'false' (một chuỗi chứa từ khóa false)
// [] (một array trống)
// {} (một object trống)
// function(){} (một hàm "trống")

// Ngoại lệ? - document.all
// Trong Javascript (phía trình duyệt) sẽ có sẵn một đối tượng document, và khi bạn thử !!document.all sẽ trả về false. Chẳng lẽ document.all cũng là falsy hay sao?

// document.all chuyển sang boolean sẽ là false
// document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
// Khi typeof document.all sẽ trả về "undefined"