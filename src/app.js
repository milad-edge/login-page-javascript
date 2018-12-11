import { person } from './data';

// Get id from DOM
const lgUsername = document.querySelector('#lg-username');
const lgPassword = document.querySelector('#lg-password');
const lgbtn = document.querySelector('#lg-btn');
const lgAlert = document.querySelector('#lg-alert');

// Evnet listener for login button
document.querySelector('#lg-btn').addEventListener('click', authLogin);

// function for click event
function authLogin(e) {
    if(lgUsername.value === '' || lgPassword.value === '') {

        Alert('Please fill in the fields!', 'alert-danger');

    } else if (lgUsername.value !== person.username || lgPassword.value !== person.password) {

        Alert('Your username or  your password is incorrect!', 'alert-danger');

    }  else {
        Alert('congratulations ! You are logged in.', 'alert-success');
    }

    e.preventDefault();
}

// alert function
function Alert(message, type) {
    lgAlert.innerHTML = `
        <div class="alert alert-dismissible ${type}">
            <span>${message}</span>
        </div>
    `
}
