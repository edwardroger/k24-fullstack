const handleClickButton = () => {
    //Lấy node theo id
    let value = document.getElementById('number').value;
    let input = document.getElementById('number');
    console.log(value);
    console.log(input.placeholder); //Truy cập đến attribute
    console.log(input.value);
    console.log(input.type);

    //Lấy tất cả các node theo tên class
    let inputClassName = document.getElementsByClassName('number');
    console.log(inputClassName);

    //Lấy ra tất cả các node theo tên thẻ tag
    let inputTagName = document.getElementsByTagName('input');
    console.log(inputTagName);

    //Lấy ra tất cả các node theo name
    let inputName = document.getElementsByName('product');
    console.log(inputName);

    //Lấy ra 1 node dựa theo id hoặc class
    let inputQuerySelector = document.querySelector('.number');
    console.log(inputQuerySelector);

    //Lấy ra tất cả các node theo class
    let inputQuerySelectorAll = document.querySelectorAll('.number')
    console.log(inputQuerySelectorAll);

    //Query selector dựa theo cây DOM
    let inputQ = document.querySelector('.number .text input[name="product"]');
    console.log(inputQ);
}

const handleClickPlus = () => {
    let numberOne = parseInt(document.getElementById('number-1').value);
    let numberTwo = parseInt(document.getElementById('number-2').value);
    let result = document.getElementById('result');
    let sum = numberOne + numberTwo
    result.innerHTML = '<h1>' + sum + '</h1>'; //Dùng để gán 1 đoạn mã HTML
    result.style.backgroundColor = 'red'; //Dùng để gán style cho 1 node
    // let tag = document.getElementsByTagName('h1');
    // tag[0].innerHTML = numberOne + numberTwo;
    console.log(numberOne + numberTwo);
}

const handleOnchange = () => {
    let value = document.getElementById('number').value;
    console.log(value);
}

const handleOnKeyUp = () => {
    let input = document.querySelector('input[name="product"]').value;
    console.log(input);
}

// Bài tập
// Hoàn thành phép - * /