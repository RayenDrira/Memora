const form = document.querySelector(".form-box");
const nom = document.getElementById("lastname_input");
const prenom = document.getElementById("firstname_input");
const email = document.getElementById("email_input");
const password = document.getElementById("password_input");
const terms = document.getElementById("terms_checkbox");
const error_msg=document.getElementById("error_msg")
form.addEventListener('submit', (e) => {
    const errors = getSignupFormErrors(nom, prenom, email, password, terms);

    if (errors.length > 0) {
        e.preventDefault();
        error_msg.innerText = errors.join('\n'); 
        error_msg.style.display = 'block';
    } else {
        error_msg.innerText = ''; 
        error_msg.style.display = 'none'; 
    }
});

function getSignupFormErrors(nom, prenom, email, password, terms) {
    let errors = [];

    [nom, prenom, email, password].forEach(input => {
        input.parentElement.classList.remove('Incorrecte');
    });
    terms.parentElement.classList.remove('Incorrecte');

    if (prenom.value.trim() === '') {
        errors.push('Veuillez entrer votre prénom');
        prenom.parentElement.classList.add('Incorrecte');
    }

    if (nom.value.trim() === '') {
        errors.push('Veuillez entrer votre nom');
        nom.parentElement.classList.add('Incorrecte');
    }

    if (email.value.trim() === '') {
        errors.push('Veuillez entrer votre email');
        email.parentElement.classList.add('Incorrecte');
    }

    if (password.value.trim() === '') {
        errors.push('Veuillez entrer votre mot de passe');
        password.parentElement.classList.add('Incorrecte');
    }

    if (!terms.checked) {
        errors.push('Vous devez accepter les conditions');
        terms.parentElement.classList.add('Incorrecte');
    }

    return errors;
}
