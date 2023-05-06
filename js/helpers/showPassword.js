const username = document.getElementById("signup-user-input")

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