import { createAdminUser } from "../js/helpers/createAdminUser.js";

const header = document.querySelector('header')
const userLogged = JSON.parse(localStorage.getItem("user-logged"));

document.addEventListener("DOMContentLoaded", ()=>{
  createAdminUser()
})

export const Navbar = () => {
  header.innerHTML = (`
    <nav class="navbar navbar-expand-lg navbar bg-dark px-3" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/index.html"><img src="/img/favicon.webp" class="img-fluid w-75" alt=""> </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
          </li>
          ${userLogged?.role == "admin" ? ` <li class="nav-item">
          <a class="nav-link" href="/views/admin.html">Admin</a>
        </li>`: null}
          </li>
        </ul>
    
        <ul class="navbar-nav">
            <li class="nav-item ms-auto">
            ${userLogged? `<button type="button" class="btn btn-outline-secondary rounded-5"><a class="text-decoration-none text-light" onclick="signOut()" >Sign Out</a></button>`
                : `<button type="button" class="btn btn-outline-secondary rounded-5"><a class="text-decoration-none text-light" href="/views/login.html">Login</a></button>
            <button type="button" class="btn btn-outline-secondary rounded-5"><a class="text-decoration-none text-light" href="/views/signUp.html">Sign Up</a></button>`
            }    
              </li>
        </ul>
      </div>
    </div>
  </nav>
    `)
};

function signOut(){
 // Funcion para cerrar sesion
}

window.signOut = signOut