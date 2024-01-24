// 1. Hàm (Function)

function baitap1(parameters) {
    console.log(parameters);
}

function baitap2() {
    console.log("Bài tập 2");
}

// baitap1(15);
// baitap1("Hello, world!");
// baitap1([1, 2, 3, 4, 5]);

// 2. Các loại hàm

function handle(number) { //Function chỉ để xử lý
    number++;
}
console.log(handle(5));

function returnValue(number) { //Function trả về kết quả
    return number; //Sau khi return => dừng hàm
}
console.log(returnValue(10));

// 3. Các cách định nghĩa function:

function baitap3(number) { //Cách định nghĩa function cơ bản
    return number;
}

const arrowFunction = (number) => { //Arrow function: hàm mũi tên

}

//Các cú pháp viết gọn của arrow function
const arrowFunction2 = (number) => number; // tương đương return number
const arrowFunction3 = number => number;

const sum = (a, b) => a + b;

console.log(sum(5, 10));


// BTVN: 
// 1. Khai báo 1 mảng gồm 10 số nguyên. Tính tổng số lớn nhất và số nhỏ nhất. 
// 2. Khai báo 1 mảng gồm n số nguyên. Tính tổng số lớn nhất và số lớn thứ 2.
// Yêu cầu: Tối ưu code. Tránh lặp code

const defineArray = (n) => {
    var array = [];
    for (let index = 0; index < n; index++) {
        //push item => array
    }

    return array;
}

//bai 8
const sumMinMax = () => {
    var array = defineArray(10);
    var min = array[0];
    var max = array[1];

    return min + max;
}

const sumMax = () => {
    var n = prompt('nhap n');
    var array = defineArray(n);
    var max1 = array[0];
    var max2 = array[1];

    return max1 + max2;
}

console.log(sumMinMax());