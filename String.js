/**
 * CHUỖI TRONG JAVASCRIPT
 * 1 . Tạo chuỗi
 *   - Cách tạo chuỗi
 *   - Nên dùng cách nào ? Lý do ?
 *   - Kiểm tra data type
 * 2 . Một số case sử dụng backslash (\)
 * 3 . Xem độ dài chuỗi
 * 4 . Chú ý độ dài khi viết Code
 * 5 . Template string ES6
 */

// 1 . Tạo chuỗi

let fullName = 'Duy Dang';

console.log(typeof fullName);
let lastName = new String('Duy Dang');
console.log(typeof lastName);

// 2 . Một số case sử dụng backslash (\)

let address = 'Hà Nội \' \\';
console.log(fullName);

// * 3 . Xem độ dài chuỗi

console.log(address.length);

// 4 . Chú ý độ dài khi viết Code :  Tối đa 80 ký tự trên 1 dòng

let description = 'Chú ý độ dài khi viết Code :  Tối đa 80 ký tự trên 1 dòng'


// * 5 . Template string ES6

console.log(`Tôi là : ${address} ${description}`);

/**
 * LÀM VIỆC VỚI CHUỖI
 * 
 * Keyword
 * 
 */
var myString = " LÀM VIỆC VỚI JS CHUỖI JS JS   "
//  * 1 . Lenght
console.log(myString.length);
//  * 2 . Find index
console.log(myString.indexOf('JS'));
console.log(myString.indexOf('JS',4));
console.log(myString.lastIndexOf('JS'));

console.log(myString.search('JS'))
//  * 3 . Cut string
console.log(myString.slice())
console.log(myString.slice(4))
console.log(myString.slice(4,8))
console.log(myString.slice(0))
console.log(myString.slice(-3,-1))
//  * 4 . Replace
console.log(myString.replace('JS','Javascipt'))
// Biểu thức chính quy
console.log(myString.replace(/JS/g,'Javascipt'))
//  * 5 . Convert to upper case
console.log(myString.toUpperCase());
//  * 6 . Convert to lower case
console.log(myString.toLowerCase());
//  * 7 . Trim
console.log(myString.trim());
//  * 8 . Split
var languages = 'JavaScript,PHP,HTML,CSS'
console.log(languages.split(','));
var language = 'JavaScript'
console.log(language.split(''));
//  * 9 . Get a character by index

console.log(myString.charAt(10));