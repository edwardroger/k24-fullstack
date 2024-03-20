const handleSubmitForm = () => {
    let error = validateForm();
    if (error) {
        console.log('loi');
    }

    //Xu ly dang nhap
    //So sanh gia tri email va password voi user trong data.js
}

const validateForm = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let passwordError = false;
    let emailError = false;
    if (password.length < 6) {
        passwordError = true;
        document.querySelector('.password-error').innerHTML = 'Password must be at least 6 characters'
    }
    if (password.length > 20) {
        document.querySelector('.password-error').innerHTML = 'Password must be at least 6 characters'
    }
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (String(email).toLowerCase().match(regex)) { //Regular Expression
        document.querySelector('.email-error').innerHTML = 'Password must be at least 6 characters'
    }

    if (passwordError) {
        document.getElementById('password').classList.add('input-error');
    }

    if (emailError || passwordError) {
        return true;
    }

    return false;
}