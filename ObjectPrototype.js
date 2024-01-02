/**
 * Object prototype
 */

function User(firstName, lastName, email, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    };
}

User.prototype.className = 'Anonymous';
User.prototype.getClassName = function(){
    return this.className;
}
var author = new User('Duy','Đặng','duydang@gmail.com','123456789');
var user = new User('Hiếu','Đặng','hieudang@gmail.com','147258369');
author.address = 'Huế';
user.city = 'Đà Nẵng';

console.log(author);
console.log(user);
console.log(author.getClassName());
console.log(user.getClassName());