
document.addEventListener("DOMContentLoaded", function () {
    //DOMContentLoaded attend que la page soit chargée avant d'exécuter le JS, pour éviter les erreurs
    const form = document.querySelector(".form-box"); //querySelector qui permet de sélectionner un élément HTML dans la page.
    form.addEventListener("submit", function (e) {
        
    const username = document.getElementById("username_input").value.trim();
    const password = document.getElementById("password_input").value.trim();
    const remember = document.getElementById("remember_checkbox");
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
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