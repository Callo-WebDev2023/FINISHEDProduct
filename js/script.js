// inputs
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const input = document.querySelectorAll('input');

// forms
const signupForm = document.querySelector('#signup-form');
const loginForm = document.querySelector('#login-form');

// errors
const fnameError = document.getElementById('fnameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const message = document.querySelector('span');

// button
const logoutBtn = document.getElementById('logout');

// user signup
if (signupForm) {

  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullNameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (fullNameValue === '') {
      fnameError.innerText = 'Fullname is required.'
      fnameError.classList.add('error');
      fullname.style.border = '2px solid red';

    } else if (fullNameValue.length < 5) {
      fnameError.innerText = 'Minimum length required is 8.';
      fnameError.classList.add('error');
      fullname.style.border = '2px solid red';

    } else {
      localStorage.setItem('fullname', fullNameValue);
      fnameError.innerText = '';
      fullname.style.border = '2px solid green';
    }

    if (emailValue === '') {
      emailError.innerText = 'Email Address is required.';
      emailError.classList.add('error');
      email.style.border = '2px solid red';

    } else if (!validEmail(emailValue)) {
      emailError.innerText = 'Email Address is not valid.';
      emailError.classList.add('error');
      email.style.border = '2px solid red';

    } else {
      localStorage.setItem('email', emailValue);
      emailError.innerText = '';
      email.style.border = '2px solid green';
    }

    
    if (passwordValue === '') {
      passwordError.innerText = 'Password is required.';
      passwordError.classList.add('error');
      password.style.border = '2px solid red';

    } else if (!validPassword(passwordValue)) {
      passwordError.innerText = 'Minimum length required is 8, at least one letter, \n one number, and one special character.';
      passwordError.classList.add('error');
      password.style.border = '2px solid red';

    } else {
      localStorage.setItem('password', passwordValue);
      passwordError.innerText = '';
      password.style.border = '2px solid green';
    }

    const getFullName = localStorage.getItem('fullname');
    const getEmail = localStorage.getItem('email');
    const getPassword = localStorage.getItem('password');


    const getSignup = getFullName && getEmail && getPassword;
    const getSignupValue = fullNameValue && emailValue && passwordValue;


    if (getSignupValue === '') {
      message.innerText = 'All fields are required.';
      message.classList.remove('success-message');
      message.classList.add('error-message');
    } else if (getSignup != null) {
      message.innerText = 'Account successfully created.';
      message.classList.remove('error-message');
      message.classList.add('success-message');

      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }

    }
  });
}

// regular expressions

function validEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validPassword(password) {
  const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@._$!%*#?&])[A-Za-z\d@._$!%*#?&]{8,}$/;
  return re.test(password);
}


//user login
if (loginForm) {

  loginForm.addEventListener('submit', function(e){
    e.preventDefault();

  
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    const getEmailAddress = localStorage.getItem('email');
    const getPasword = localStorage.getItem('password');
    
    
    if (emailValue === getEmailAddress && passwordValue === getPasword) {
      location.href = 'member.html';

    } else if (emailValue === '' || passwordValue === '') {
      message.innerText = 'Email address and password are required.';
      message.classList.add('error-message');
      email.style.border = '2px solid red';
      password.style.border = '2px solid red';

    } else if (!validEmail(emailValue)) {
      message.innerText = 'Email address is not valid.';
      message.classList.add('error-message');

    } else {
      message.innerText = 'Invalid email address or password.';
      message.classList.add('error-message');
      email.style.border = '2px solid red';
      password.style.border = '2px solid red';
    }
  });

}

// user logout
if (logoutBtn) {

  const fullname = document.getElementById('fullname');

  fullname.innerText = localStorage.getItem('fullname');
  fullname.style.color = 'orange';

  logoutBtn.addEventListener('click', function() {
    location.replace('index.html');
  });

}


// responsive menu 
const links = document.querySelector('.nav-links');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

openMenu.addEventListener('click', function() {
  links.style.display = 'flex';
  links.style.top = '0';
});

closeMenu.addEventListener('click', function() {
  links.style.top = '-100%';
});
