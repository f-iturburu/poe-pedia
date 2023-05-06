const form = document.getElementById("signup-form")
const usernameInput = document.getElementById("signup-username-input")
const emailInput = document.getElementById("signup-email-input")
const passwordInput = document.getElementById("signup-password-input")
const repeatPasswordInput = document.getElementById("repeat-signup-password-input")
const showPasswordBtn = document.getElementById("show-password-btn")

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


const validationObject = {
    validUsername : false ,
    validEmail: false , 
    validPassword: false, 
    validRepeatedPassword: false
}

usernameInput.addEventListener('keyup', ()=>{
    //Validar username
})

emailInput.addEventListener('keyup', ()=>{
    // Validar email
})

passwordInput.addEventListener('keyup', ()=>{
    //Validar contraseña
})

repeatPasswordInput.addEventListener('keyup', ()=>{
     //Validar contraseña
})

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const submitBoolHandler = Object.values(validationObject).find(i => i == false)
})