//1. Khai báo biến (variables)
// var, let, const
var number = 5; //var: khai báo, number: tên biến, = : phép gán, 5: giá trị gán
// let number = 10; //tương tự
// const number = 15; // tương tự
let string = 'Hello World 2';

// 2. Các kiểu dữ liệu trong js
// C: integer, float, double, tinyInteger, string, boolean, null,
// JS: number, string, boolean, null, undefined, array, object, function, symbol, NaN,...
// Khai báo 1 number: var number = 20;
// Khai báo 1 string: var string = 'This is string';
// Khai báo 1 biến boolean: var bool = true; (0 hoặc 1)
// Khai báo 1 biến null: var check = null;

// console.log('Hello world');
// console.log(number);
// console.log(string);

//3. Các toán tử trong JS:
// 3.1 Toán tử gán: (=)
// Ex: var a = 5;
// Ex: a = 10;

// 3.3 Toán tử cơ bản: (+, -, *, /, %, ++, --, **)
// Ex: 
// var a = 5;
// var b = 6;
// var c = a + b;
// console.log(c);
// var number1 = 20;
// var number2 = 7;
// console.log(number1 % number2);
// console.log(number1**number2); // **: luỹ thừa
// console.log(number1);

// 3.4 Toán tử so sánh: (>, <, >=, <=, ==, ===, !=)

// 3.5 Toán tử 3 ngôi: (?:, ??)

// 3.2 Toán tử logic: (&&, ||, !)
// &&: Toán tử AND 
// ||: Toán tử OR
// !: Toán tử NOT
Ex: 
// var a = 5;
// var b = -1;
// var c = true;
// if (a < 0 || b > 0) {
    
// }

// if (!c) {
    
// }
// 4. Câu điều kiện:
// var a = 5; //number
// var b = 10;
// var c = '5'; //string
// var d = 0;

// if (a === c) {
//     console.log('Số a lớn hơn số b');
// } else {
//     console.log('Biểu thức sai');
// }

// if (a > b) {
//     console.log('Số a lớn hơn b');
// } else if (a < b) {
//     console.log('Số a bé hơn b');
// } else if (a != b) {
//     console.log('số a khác b');
// } else {
//     console.log('a bằng b');
// }

// if (a < b) {
//     d = b - a;
// }

// if (a > b) {
//     d = a - b;
// } else {
//     d = b + a;
// }
// console.log(d);

// Bài tập: 
// 1. Khai báo 1 điểm số:
// Nếu điểm đó dưới 4 thì in ra màn hình: Đúp,
// Điểm dưới 6 => in ra: Học lực trung bình,
// Điểm dưới 8 => in ra: Học lực khá,
// Điểm dưới 10 => in ra: Học lực giỏi,
// Trường hợp nhập sai => in ra: Điểm sai 

var diem = prompt('nhap');

if (diem >= 0 && diem < 4) {
    console.log('Đúp');
} else if (diem >= 4 && diem < 6) {
    console.log('Học lực trung bình');
} else if (diem >= 6 && diem < 8) {
    console.log('Học lực khá');
} else if (diem >= 8 && diem <= 10) {
    console.log('Học lực giỏi');
} else {
    console.log('Nhập sai');
}

// Bài tập 2: Nhập vào 3 số a, b, c; 
// Cho biết, a, b, c có phải là độ dài của
// 3 cạnh tam giác hay không?
// Nếu là tam giác thì đó là tam giác gì?
var a = prompt('a');
var b = prompt('b');
var c = prompt('c');

if (a > 0 && b > 0 && c > 0) {
    if ((a + b > c) && (b + c > a) && (a + c > b)) {
        if (a == b && a == c) {
            console.log('đều')
        } else if (a == b || b == c || c == a ) {
            console.log('cân')
        } else if ((c*c == b*b + a*a) || (a*a == b*b + c*c) ||(b*b == a*a + c*c)) {
            if (a == b || b == c || c == a ) {
                console.log('vuông cân');
            } else {
                console.log('vuông')
            }
        } else {
            console.log('Tam giác thường')
        }
    } else {
        console.log('Không phải tam giác');
    }
} else {
    console.log('Nhập sai');
}


// BTVN: nhập vào 3 số a, b, c
// Giải phương trình bậc 2: a.x^2 + b.x + c = 0
// Gợi ý:  Math.sqrt (tính căn bậc 2)
// Các trường hợp xảy ra : delta < 0, delta > 0, delta = 0