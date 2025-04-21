
document.addEventListener("DOMContentLoaded", function () {
    //DOMContentLoaded attend que la page soit chargée avant d'exécuter le JS, pour éviter les erreurs
    const form = document.querySelector(".form-box"); //querySelector qui permet de sélectionner un élément HTML dans la page.
    form.addEventListener("submit", function (e) {
        
    const username = document.getElementById("username_input").value.trim();
    const password = document.getElementById("password_input").value.trim();
    const remember = document.getElementById("remember_checkbox");
    
    const specialCharRegex = /[.@\-_/]/;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
  
      if (!specialCharRegex.test(username)||
      !upperCaseRegex.test(username)
      ||!lowerCaseRegex.test(username)) {
        alert("Username must contain at least one special character (.@-/), one uppercase, and one lowercase letter.");
        e.preventDefault(); //Bloque l'action automatique
        return;
      }
      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        e.preventDefault();
        return;
    }
      
  
      if (username === "") {
        alert("please enter your username.");
        e.preventDefault();
        return;
      }
      if (password === "") {
        alert("please enter your password.");
        e.preventDefault();
        return;
      }

    });
  });