
document.addEventListener("DOMContentLoaded", function () {
    //DOMContentLoaded attend que la page soit chargée avant d'exécuter le JS, pour éviter les erreurs
    const form = document.querySelector(".form-box"); //querySelector qui permet de sélectionner un élément HTML dans la page.
    form.addEventListener("submit", function (e) {
        
    const nom = document.getElementById("lastname_input").value.trim();
    const prenom = document.getElementById("firstname_input").value.trim();
    const email = document.getElementById("email_input").value.trim();
    const password = document.getElementById("password_input").value.trim();
    const terms = document.getElementById("terms_checkbox");
    
      const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!nameRegex.test(nom)) {
        alert("First name must contain only letters and spaces.");
        e.preventDefault(); //Bloque l'action automatique
        return;
      }
      if (!nameRegex.test(prenom)) {
        alert("Last name must contain only letters and spaces.");
        e.preventDefault(); //Bloque l'action automatique
        return;
      }
      if (!emailRegex.test(email)) {
        alert("please entre a valid email address.");
        e.preventDefault();
        return;
      }
      
  
      if (nom === "") {
        alert("please enter your Last name.");
        e.preventDefault();
        return;
      }
      if (prenom === "") {
        alert("please enter your First name.");
        e.preventDefault();
        return;
      }
      if (email === "") {
        alert("please enter your email.");
        e.preventDefault();
        return;
      }
      if (password === "") {
        alert("please enter your password.");
        e.preventDefault();
        return;
      }
      if(!terms.checked){
        alert("Check it");
        e.preventDefault();
        return;
      }
      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        e.preventDefault();
        return;
      }

    });
  });