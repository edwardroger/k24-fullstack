document.addEventListener("DOMContentLoaded", (event) => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        window.location = 'http://127.0.0.1:5500/Day22-20-03';
    }
});

const handleSubmitForm = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    //Validation
    let error = validateForm(email, password);
    if (error) {
        console.log('loi');
    }

    //Xu ly dang nhap
    let userFound = user.find(item => item.email === email);
    if (userFound) {
        if (userFound.password === password) {
            let userLogin = {
                id: userFound.id,
                name: userFound.name,
                email: userFound.email,
            };
            localStorage.setItem('user', JSON.stringify(userLogin));
            //Redirect to home page
            window.location = 'http://127.0.0.1:5500/Day22-20-03';
        } else {
            document.getElementById('password').classList.add('input-error');
            document.querySelector('.password-error').innerHTML = 'Wrong password';
        }
    } else {
        document.querySelector('.email-error').innerHTML = 'User not found';
    }
}

const validateForm = (email, password) => {
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
    // if (String(email).toLowerCase().match(regex)) { //Regular Expression
    //     document.querySelector('.email-error').innerHTML = 'Password must be at least 6 characters'
    // }

    // if (passwordError) {
    //     document.getElementById('password').classList.add('input-error');
    // }

    // if (emailError || passwordError) {
    //     return true;
    // }

    // return false;
}