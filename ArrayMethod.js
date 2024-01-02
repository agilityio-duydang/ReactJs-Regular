/**
 *  Array methods
 *  1 . foreach
 *  2 . every
 *  3 . some
 *  4 . find
 *  5 . filter
 *  6 . map
 *  7 . reduce
 */

const courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 100,
  },
  {
    id: 2,
    name: "PHP",
    coin: 200,
  },
  {
    id: 3,
    name: "Java",
    coin: 300,
  },
  {
    id: 4,
    name: "Dart",
    coin: 400,
  },
  {
    id: 5,
    name: "HTML",
    coin: 500,
  },
];

// foreach : Duyệt qua từng phần tử của mảng

courses.forEach(function (course, index) {
  console.log(index, course);
});

// every : Kiểm tra tất cả các phần tử của mảng thoả mãn điều kiện đến khi phần tử nào sai điều kiện mới dừng lại
// Giá trị trả về là bool

let isFree = courses.every(function (course, index) {
  return course.coin === 0;
});

console.log(isFree);

// some : Kiểm tra một trong các phần tử của mảng thoả mãn điều kiện đến khi điều kiện đúng thì dừng lại
// Giá trị trả về là bool

let isIncludeFree = courses.some(function (course, index) {
  return course.coin === 0;
});

console.log(isIncludeFree);

// find

let course = courses.find(function (course, index) {
  return course.name === "Dart";
});

console.log(course);

// filter

let listCoures = courses.filter(function (course, index) {
  return course.name === "Dart";
});

console.log(listCoures);

// reduce

// function coinHandler (accumulator, currentValue){
//     console.table({
//         'Biến lưu trữ': accumulator,
//         'Giá trị Coint': currentValue.coin,
//         'Giá trị lưu trữ': accumulator + currentValue.coin
//     })
//      return accumulator + currentValue.coin;
// };

let total = courses.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.coin;
}, 0);

console.table(total);
let totalCoin = courses.reduce(function (total, course) {
  return total + course.coin;
}, 0);

console.table(totalCoin);

const deptArray = [1, 2, [3, 4], 5, 6, 7, 8, 9, [10, 11], 12, 13, 14, 15];
console.log(deptArray);

let flatArray = deptArray.reduce(function (array, currentItem) {
  return array.concat(currentItem);
}, []);

console.log(flatArray);

const post = [
  {
    name: "Back-end",
    tittle: "",
    courses: [
      {
        id: 1,
        name: "C#",
        coin: 100,
      },
      {
        id: 2,
        name: "Java",
        coin: 200,
      },
    ],
  },
  {
    name: "Front-end",
    tittle: "",
    courses: [
      {
        id: 3,
        name: "Javascript",
        coin: 200,
      },
      {
        id: 4,
        name: "PHP",
        coin: 200,
      },
    ],
  },
];

let listCoure = post.reduce(function (course, currentItem) {
  return course.concat(currentItem.courses);
}, []);

console.log(listCoure);

const number = [1, 2, 3, 4, 5];

const result = number.reduce(function (total, number) {
  return total + number;
});

console.log(result);
Array.prototype.reduce2 = function (callback, result) {
  // Khi reduce không truyền initialVale thì biến tích trữ là phần tử đầu tiên của mảng
  // currentValue là phần tử thứ 2 của mảng
  let index = 0;
  if (arguments.length < 2) {
    result = this[0];
    index = 1;
  }
  for (index; index < this.length; index++) {
    result = callback(result, this[index], index, this);
  }
  return result;
};

const result2 = number.reduce2(function (total, number) {
  return total + number;
});

console.log(result2);

// Includes methods

let tittle =
  "Tham gia nhóm Học lập trình tại F8 trên Facebook để cùng nhau trao đổi trong quá trình học tập";

console.log(tittle.includes("facebook"));

var listCoureses = ["Javascript", "PHP", "Dark"];

console.log(listCoureses.includes("Dark"));

Array.prototype.map2 =  function (callback){
  let result = [];
  for (let index = 0; index < this.length; index++) {
    let item =  callback(this[index],index);
    result.push(item);
  }
  return result;
}

var htmls = listCoureses.map(function(coures) { 
  return `<h2>${coures}</h2>`;
})

console.log(htmls.join(''));

var html2s = listCoureses.map2(function(coures) { 
  return `<h2>${coures}</h2>`;
})

console.log(html2s.join(''));