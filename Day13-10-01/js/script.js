// 1. Vòng lặp
// - Vòng lặp for (*)
// - Vòng lặp while
// - Vòng lặp Do while
// - Vòng lặp map (*)
// - Vòng lặp filter
// - ...

// *Note: i (index): Chỉ mục của vòng lặp

// Example:
// for : khai báo vòng lặp for
// let i = 0 : khởi tạo biến lặp
// i < 10 : điều kiện lặp (nếu điều kiện lặp true => thực hiện đoạn code trong for)
// i++ : bước lặp

// for (let i = 5; i < 10; i++) {
//     console.log(i);
// }

// Bài tập ví dụ:
// In ra màn hình các số chẵn bé hơn hoặc bằng 20

for (let index = 0; index <= 20; index++) {
    if (index % 2 === 0) {
        console.log(index);
    }
}

// Bài tập:
// 1. Tính tổng các số chẵn bé hơn hoặc bằng 20
// 2. In ra màn hình các số chia hết cho 5 (<= 1000)

// 3. Tính tiền gửi ngân hàng sau n tháng 
// - Số tiền nhập vào từ bàn phím
// - Số tháng nhập vào từ bàn phím
// - Phần trăm lãi hàng tháng: 5%
// In ra số tiền nhận được sau n tháng

// 4. Tính giai thừa của số n nhập vào từ bàn phím
// 5. Nhập vào số n. In ra các số nguyên tố nhỏ hơn n