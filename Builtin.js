/**
 * Giới thiệu môt số hàm built-in (Hàm xây dựng sẵn)
 * 1 . Alert
 * 2 . Console
 * 3 . Confirm
 * 4 . Prompt
 * 6 . Set timeout
 * 5 . Set interval
 */


const fullName = 'Duy';
const job = 'IT';

alert(fullName + '' + job);

console.log(fullName +'' + job);
console.error(fullName + '' + job);
console.warn(fullName + '' + job);
console.info(fullName + '' + job);

confirm(fullName +'' + job);
prompt(fullName + '' + job);


setTimeout(function() {
 alert(fullName + '' + job);
}, 1000);

setInterval(function() {
 console.log(fullName + '' + job);
}, 1000);