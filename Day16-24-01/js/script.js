// // 1. Var, Let, Const trong JS
// // 1.1 Var
// // - Viết tắt của từ variable
// // - Phạm vi khai báo = global 

// // 1.2 Let 
// // - Khai báo biến cục bộ

// // 1.3 Const 
// // - Viết tắt của từ Constant (Hằng số)

// var number = 10;
// let variable = 1;

// const defineNumber = () => {
//     const a = 1; // áp dụng cho: number, string, null, undefined
//     console.log(a);
//     var string = 'test';
//     let number2 = 15;
//     if (true) {
//         var number = 20;
//         console.log(number2);
//     }
//     // console.log(number2);
//     console.log(number);
//     console.log(test);
//     console.log(variable);
//     for (let index = 0; index < 1; index++) {
//     }
//     console.log(index);
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
// }

// define();

// const APP_NAME = 'REACT';

// // 2. Quy tắc đặt tên biến:
// // 2.1 camelCase: Kiểu lạc đà 
// let numberOne = 1; //Áp dụng để đặt tên biến và tên function
// let letDefineAVariable = 1;

// // 2.2 snake_case:  Kiểu rắn bò
// let number_one = 1; //Áp dụng đặt tên biến
// let let_define_a_variable = 1;

// // 2.3 Uppercase: Viết hoa
// let NumberOne = 1; //Không áp dụng để đặt tên biến (Được áp dụng để đặt tên file hoặc tên class)

// // 2.4 Khai báo const 
// const JAVASCRIPT_VERSION = 1;

// 3. Bất đồng bộ trong Javascript (First expired first out)

const callApiGetProduct = () => {
    console.log('start call api get product');

    setTimeout(() => {
        console.log('end call api get product');
    }, 2000);
}

const callApiDeleteProduct = (product) => {
    console.log('start call api delete product');
    setTimeout(() => {
        console.log('end call api delete product');
        console.log(product);
    }, 1000);
}

// const callApiCreateProduct = new Promise () => {
//     console.log('start call api create product');

//     return setTimeout(() => {
//         console.log('end call api create product');
//         return 5;
//     }, 3000);
// }
const callApiCreateProduct = new Promise ((resolve, reject) => {
    console.log('start call api create product');
    setTimeout(() => {
        console.log('end call api create product');
        let number = 10;
        resolve(callApiDeleteProduct(number))
    }, 3000);
});
var product = callApiCreateProduct();
// callApiDeleteProduct(product);
callApiGetProduct();

