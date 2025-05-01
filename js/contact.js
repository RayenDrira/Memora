document.addEventListener("DOMContentLoaded", function () {
    //DOMContentLoaded attend que la page soit chargée avant d'exécuter le JS, pour éviter les erreurs
    const form = document.querySelector("form"); //querySelector qui permet de sélectionner un élément HTML dans la page.
    form.addEventListener("submit", function (e) {
      const fullName = document.querySelector("input[placeholder='Full Name']").value.trim();
      const email = document.querySelector("input[placeholder='Email address']").value.trim();
      const mobile = document.querySelector("input[placeholder='Mobile Number']").value.trim();
      const subject = document.querySelector("input[placeholder='Email subject']").value.trim();
      const message = document.querySelector("textarea").value.trim();
  
      const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobileRegex = /^[0-9]{8,}$/;
  
      if (!nameRegex.test(fullName)) {
        alert("Full name must contain only letters and spaces.");
        e.preventDefault(); //Bloque l'action automatique
        return;
      }
      if (!emailRegex.test(email)) {
        alert("please entre a valid email address.");
        e.preventDefault();
        return;
      }
      if (!mobileRegex.test(mobile)) {
        alert("mobile number must be at least 8 digits.");
        e.preventDefault();
        return;
      }
      
  
      if (subject === "") {
        alert("Email subject is required.");
        e.preventDefault();
        return;
      }
      if (message === "") {
        alert("please enter your message.");
        e.preventDefault();
        return;
      }
    });
  });
  