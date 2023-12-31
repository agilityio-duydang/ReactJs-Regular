// Hàm (function) trong Javascript

function showDialog() {
    alert("Dialog");
}

function showMessage(message) {
    console.log(message);
}

showMessage("Hi anh em F8!");

// message là tham số.
// "Hi anh em F8!" là đối số (argument)

// Tham số
/**
 * Tham số
 *   - Định nghĩa
 *   - Kiểu dữ liệu
 *   - Tính private
 *   - 1 tham số
 *   - Nhiều tham số
 * 
 * Argument?
 * - Đối tượng argument
 * - Vòng lặp for
 */


function writeLog(message){
    console.log(message);
}

writeLog("Hi anh em F8!");
function writeMessage(){
    for (const param of arguments) {
        console.log(param);
    }
}

writeMessage("Hi anh','F8!'");
