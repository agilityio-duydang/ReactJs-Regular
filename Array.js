/**
 * Làm việc với mảng
 * 1 . To string
 * 2 . Join
 * 3 . Pop
 * 4 . Push
 * 5 . Shift
 * 6 . Unshift
 * 7 . Splicing
 * 8 . Concat
 * 9 . Slicing
 */

// 1 . To string
var languages = [
    'JavaScript',
    'PHP',
    'HTML',
    'CSS',
    'Java',
];

console.log(languages.toString());

// 2 . Join : Nối các phần tử của mảng

console.log(languages.join(', '));

// 3 . Pop : Xoá element cuối mảng và trả về phần tử đã xoá

console.log(languages.pop());
console.log(languages.pop());
console.log(languages.pop());

// 4 . Push : Thêm 1 hoặc nhiều element vào cuối mảng và trả về độ dài mới của mảng

console.log(languages.push('Dart','C#'));


// 5 . Shift : Xoá phần tử đầu tiên của mảng trả và về phần tử đã xoá

console.log(languages.shift());

// 6 . Unshift : Thêm 1 hoặc nhiều element vào đầu mảng và trả về độ dài mới của mảng

console.log(languages.unshift('JavaScript','PHP'))

// 7 . Splicing : Xoá / Chèn phần tử vào mảng 

languages.splice(1);
console.log(languages);
languages.splice(1,0);
console.log(languages);
languages.splice(1,0,'Dart');
console.log(languages);
languages.splice(1,1,'Dart');
console.log(languages);

// 8 .  Concat : Nối mảng với nhau

let languages2 = [
    'Dart',
    'Ruby'
];

console.log(languages.concat(languages2));
console.log(languages.concat(languages));

// Slicing :  Cắt toàn bộ hoặc một vài element của mảng

console.log(languages.slice(1));

// Coppy mảng
console.log(languages.slice(0));

