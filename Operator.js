/**
 * Operator (Toán tử)
 * Giới thiệu về toán tử trong JavaScript
 * 1 . Toán tử số học - Airthemtic
 * 2 . Toán tử gán - Assignment
 * 3 . Toán tử so sánh - Comparison
 * 4 . Toán tử logic - Logical
 */

// 1. Toán tử số học - Airthemtic
/**
 * + --> Cộng
 * - --> Trừ
 * * --> Nhân
 * ** --> Luỹ thừa
 * / --> Chia
 * % --> Chia lấy số dư
 * ++ --> Tăng 1 giá trị một số
 * -- --> Giảm 1 giá trị một số
 */

//Toán tử ++ khi dùng là hậu tố sẽ tăng giá trị của biến lên 1 và trả về giá trị trước khi tăng.
var number = 1;

++number; // dùng làm tiền tố, ++ ở phía trước biến
console.log(number); // 2

++number;
console.log(number); // 3
//Toán tử ++ khi dùng là tiền tố sẽ tăng giá trị của biến lên 1 và trả về giá trị sau khi tăng.
var number = 1;

console.log(++number); // 2
console.log(number); // 2

console.log(++number); // 3
console.log(number); // 3
var a = 10;
var b = 20;

var c = a + b;
console.log(c);
var d = a - b;
console.log(d);
var e = a * b;
console.log(e);
var f = a / b;
console.log(f)
var g = a % b;
console.log(g);
var h = ++a;
console.log(h);
var i = --a;
console.log(i);
var j = a**a;
console.log(j);
// 2. Toán tử gán - Assignment
/**
 * += --> 
 * -= -->
 * *= -->
 * /= -->
 * **= -->
 */
a+=b;
console.log(a);
a-=b;
console.log(a);
a*=b;
console.log(a);
a/=b;
console.log(a);
a**=b;
console.log(a);

// 3. Toán tử so sánh - Comparison
/**
 *  == --> Bằng
 *  != --> Không bằng
 *  >  --> Lớn hơn
 *  <  --> Nhỏ hơn
 *  >= --> Lớn hơn hoặc bằng
 *  <= --> Nhỏ hơn hoặc bằng
 */

/**
 * If and else
 */

/**
 * Covert sang Boolean là false
 *  0
 *  false
 *  '' - ""
 *  undefined
 *  NaN
 *  null
 */

var Operator = '';
if(Operator)
{
 console.log('Điều kiện đúng');
}else {
    console.log('Điều kiện sai');
}

// 4. Toán tử logic - Logical
/**
 * Toán tử logic - Logical
 * 1. && --> And
 * 2. || --> Or
 * 3. !  --> Not
 */
