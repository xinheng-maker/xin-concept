let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}
// hide menu and search box on scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

// Header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {  
    header.classList.toggle('shadow', window.scrollY > 0);
});

//login and register
document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const loginForm = document.querySelector('.form-box.login form');
    const registerForm = document.querySelector('.form-box.register form');
  
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        validateLogin();
    });
  
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        validateRegistration();
    });
    registerLink.addEventListener('click', () => {
        wrapper.classList.toggle('active');
    });
  
    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });
  
  
    function validateLogin() {
        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;
  
        if (loginEmail.trim() === '' || loginPassword.trim() === '') {
            alert('Please enter both email and password.');
        } else if (!loginEmail.includes('@')) {
            alert('Please enter the correct format for your email address!');
        } else {
            alert('Login successful!');
  
            window.location.href = 'xin.html';
        }
    }
  
    function validateRegistration() {
        const username = document.getElementById('username').value;
        const registerEmail = document.getElementById('registerEmail').value;
        const registerPassword = document.getElementById('registerPassword').value;
        const termsCheckbox = document.getElementById('termsCheckbox');
  
        if (username.trim() === '' || registerEmail.trim() === '' || registerPassword.trim() === '') {
            alert('Please fill in all the fields below.');
        } else if (!termsCheckbox.checked) {
            alert('Please agree to the terms and conditions.');
        } else if (!registerEmail.includes('@')) {
            alert('Please enter the correct format for your email address!');
        } else {
            alert('Welcome to Xin-Concept!');
  
            window.location.href = 'xin.html';
        }
    }
  });
  
  function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("message").value;

    if (firstName === "" || lastName === "" || email === "" || mobile === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    } else if (!email.includes('@')) {
        alert('Please enter the correct format for your email address!');
        return false;
    } else if (!/^\+?\d{10}$/.test(mobile)) {
        alert('Please enter the correct phone number!');
        return false;
    }

    displayThankYouMessage();
        return false;
    }

    function displayThankYouMessage() {
        var formContainer = document.getElementById("contactForm").parentNode;
        formContainer.innerHTML = "<h3 id='thankYouMessage'>Thank You for contact us !</h3>";

        var thankYouMessage = document.getElementById("thankYouMessage");
        thankYouMessage.style.textAlign = "center";
        thankYouMessage.style.marginTop = "10px";

        // Redirect to the home page after 2 seconds
    setTimeout(function() {
        window.location.href = "xin.html"; // Replace with your actual home page URL
    }, 2000); // Adjust the delay (in milliseconds) based on your preference
}

document.getElementById("modify").innerHTML = new Date(document.lastModified)
        

    
  
      
  
