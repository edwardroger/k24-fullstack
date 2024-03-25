document.addEventListener("DOMContentLoaded", (event) => {
   let user = JSON.parse(localStorage.getItem("user"));
   if (user) {
        document.querySelector('.hello').innerHTML = 'Hello ' + user.name;
        document.querySelector('.login-link').classList.add('d-none');
   }
});