/**
 * Object trong JavaScript
 */

let profile = {
    name: 'Đặng Phước Duy',
    age: 18,
    address: 'Đà Nẵng',
    infomation: function() {
        return `${this.name} - ${this.age}`;
    }
}
// Thêm 1 properties vào  object
// Cách 1
profile.country = 'Việt Nam';
// Cách 2
profile['address2'] = 'Huế'
console.log(profile);

// Lấy thông tin một properties của object
// Cách 1
console.log(profile.name);
// Cách 2
console.log(profile['address2']);

// Xoá 1 properties của object
// Cách 1
delete profile.address;
console.log(profile);

// Cách 2
delete profile['address2'];
console.log(profile);

// Gọi function (Methods) của object
console.log(profile.infomation());