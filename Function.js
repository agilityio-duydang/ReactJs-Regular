/**
 * Một số điều cần biết về function
 * 1. Khi function đặt trùng tên?
 *   - Function định nghĩa sau cùng ghi đè function định nghĩa trước
 * 2. Khai báo biến trong hàm?
 *   - Có 
 *   - Phạm vi sử dụng biến ở trong function đó
 * 3. Định nghĩa hàm trong hàm?
 *  - Có
 */


// 1. Khi function đặt trùng tên?

function showMessage(){
    console.log("Message 1");
}

function showMessage(){
    console.log("Message 2");
}

// 2. Khai báo biến trong hàm?
function showMessage(){
    let message = 'Duy Dang'
    console.log("Message 1" + message);
}

// 3 . Định nghĩa hàm trong hàm
function showMessage(){
    function showMessage2() {
        console.log('Message 2');
    }
    showMessage2();
}


/**
 * Các loại Function
 * 1 . Declare function
 * 2 . Expression function
 * 3 . Arrow function
 */


// 1 . Declare function : Có thể gọi trước khi nó định nghĩa còn expression function thì không thể

showMessage();

function showMessage() {
    console.log('Declare function');
}

// 2 . Expression function

var showMessage2 = function() {
    console.log('Expression function');
};


setTimeout(function(){

});

var myObject = {
    myFunction: function(){

    }
};

showMessage();
showMessage2();