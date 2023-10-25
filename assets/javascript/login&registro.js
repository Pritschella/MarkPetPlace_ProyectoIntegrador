const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// LocaStorage SignIn

// const loginForm = document.querySelector('#loginForm')
// loginForm.addEventListener('submit', (e)=>{
//   e.preventDefault()
//   const email = document.querySelector('#email1').value
//   const password = document.querySelector('#password1').value
//   const Users = JSON.parse(localStorage.getItem('users')) || []
//   const validUser = Users.find(user => user.email === email && user.password === password)
//   if(!validUser){
//     return alert('Usuario y/o contraseña incorrecta')
//   }
//   alert(`Bienvenido ${validUser.name}`)
//   localStorage.setItem('login_success', JSON.stringify(validUser))
//   window.location.href = 'index.html'

// })

// LocaStorage SignUp

// const signupForm = document.querySelector('#signupForm')
// signupForm.addEventListener('submit', (e)=>{
//   e.preventDefault()
//   const name = document.querySelector('#name').value
//   const email = document.querySelector('#email').value
//   const password = document.querySelector('#password').value

//   const Users = JSON.parse(localStorage.getItem('users')) || []
//   const isUserRegistered = Users.find(user => user.email === email)
//   if(isUserRegistered){
//     return alert('El usuario ya esta registrado!')
//   }

//   Users.push({name: name, email: email, password: password})
//   localStorage.setItem('users', JSON.stringify(Users))
//   alert('Registro Exitoso!')
//   // window.location.href = 'index.html'
//   //Redireccion a pagina principal
// })
//Modal 
// ---


//Base de datos
const signupForm = document.getElementById('submit');

signupForm.addEventListener("click", (e) => {
e.preventDefault()  
    const nombre = document.getElementById('firstName');
    const apellido = document.getElementById('lastName');
    const correo = document.getElementById('email');
    const direccion = document.getElementById('address');
    const telefono = document.getElementById('phone');
console.log(nombre, apellido, email, address, telefono);

// Necesito asignar estas constantes a un Objeto que se va a enviar a mi servidor y posteriormente, convertir este Objeto e un formato que mi servidor pueda leer

const cliente = {
    firstName: nombre.value,
    lastName: apellido.value,
    address: direccion.value,
    email: correo.value,
    phone: telefono.value,
};
console.log(cliente);
//fetch API(url, method, headers, (json), body, then, catch)
// const url = "http://localhost:8080/users/clients";

fetch("http://localhost:8080/users/clients", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(cliente)
})  
    .then(response => {
        return response.text();
    })
    .then(cliente =>{
        console.log("Si fine", cliente);
        return cliente;
    })
    .catch(error => {
        console.log("Aqui hay un error", error);
    })
});

 