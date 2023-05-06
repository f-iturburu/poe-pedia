function protectedLoginRoute() {
    const loggedUser = localStorage.getItem("user-logged");
  
    if (!loggedUser) {
      window.location ="/views/login.html"
    }
  }
  
  export default protectedLoginRoute