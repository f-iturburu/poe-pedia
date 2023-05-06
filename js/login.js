const passwordInput = document.getElementById("login-password-input")
const userDataInput = document.getElementById("login-user-input")
const showPasswordBtn = document.getElementById("show-password-btn")
const loginForm = document.getElementById("login-form")
const users = JSON.parse(localStorage.getItem("users"))

let showPassword = false
showPasswordBtn.addEventListener('click', ()=>{
     if (showPassword) {
        passwordInput.type = "text"
        showPasswordBtn.innerHTML = `<i class="bi bi-eye"></i>`
        showPassword = !showPassword
     }else{
         passwordInput.type = "password"
         showPasswordBtn.innerHTML = `<i class="bi bi-eye-slash"></i>`
        showPassword = !showPassword
     }
})


loginForm.addEventListener("submit", (e)=>{
  e.preventDefault()

//Validaciones
//...
// window.location = "/index.html"
})