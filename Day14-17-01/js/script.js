// 1. Mảng trong JS
// [], [1], [1, 2, 3, 4, 5, 6,7];
var array = [7, 5, 3, 4, 1, 2, 7]; //index: hay còn gọi là key. vị trí (chỉ mục) của phần tử
console.log(array);
console.log(array[2]);
console.log(array.length);

for (let i = 0; i < array.length; i++) {
    console.log('Phần tử thứ ' + i + ' của mảng là: ' + array[i]);
}

// Array.length: tính độ dài của mảng
// Array.toString: Chuyển mảng về dạng String
// Array.pop: Lấy phần tử cuối cùng ra khỏi mảng
// Array.push: Thêm 1 phần tử mới vào cuối mảng
// Array.shift: Lấy ra phần tử đầu mảng (>< Array.pop)
// Array.unshift: Thêm 1 phần tử vào đầu mảng (>< Array.push)

//Bài tập: 
// 1. Cho mảng sau: [5, 6, 4, 7, 9, 8, 10];
// Đây là mảng điểm của 1 lớp. Tìm ra điểm số cao nhất.

// 2. Tìm ra điểm số thấp nhất.

// 3. Tính trung bình cộng của các điểm lẻ
// 4. Tính trung bình cộng các điểm chẵn
// 5. Tính trung bình cộng của điểm thấp nhất và điểm cao nhất
// 6. Sắp xếp điểm từ lớn -> bé
// 7. Sắp xếp điểm từ bé -> lớn
// 8. Khai báo 1 mảng gồm 10 số nguyên. Tính tổng số lớn nhất và số nhỏ nhất. 
// 9. Khai báo 1 mảng gồm n số nguyên. Tính tổng số lớn nhất và số lớn thứ 2.