import config from './config.js';
import {showToast, hideToast} from './toast.js';
import loadingButton from './loadingButton.js';

export const addSubmitLogin = (openPageLogged) => {
    const form = document.getElementById('formLogin');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('exampleInputEmail1').value;
            const password = document.getElementById('exampleInputPassword1').value;
            if (!email || !password) {
                return showToast('Fill in the required fields.'); 
            }
            if (password.length < 6) {
                return showToast('The password must contain at least 6 characters.');
            }

            loadingButton('#formLogin button', 'Login', true);

            fetch(`${config.urlBack}${config.apiLogin}`, {
                method: 'post',
                body: JSON.stringify({
                    email,
                    password
                })
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.status == 'success') {
                    hideToast();
                    saveLogin(email, password);
                    saveData(data);
                    return openPageLogged('home');
                }

                if (data.status == 'error') {
                    showToast(data.message);
                    return loadingButton('#formLogin button', 'Login', false);
                }
            })
            .catch((error) => {
                showToast(`Error: ${error.message}`);
                return loadingButton('#formLogin button', 'Login', false);
            });
        });
    }
}

export const showSave = () => {
    const check = document.getElementById('exampleCheck1');
    if (check) {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        if (email) {
            document.getElementById('exampleInputEmail1').value = email;
            document.getElementById('exampleInputPassword1').value = password;
            check.setAttribute('checked', true);
        }
    }
}

export const showData = () => {
    const name = localStorage.getItem('name');
    const avatar = localStorage.getItem('avatar');
    const parts = localStorage.getItem('parts');
    const gems = localStorage.getItem('gems');
    const coins = localStorage.getItem('coins');
    if (name) {
        const dataName = document.getElementById('dataName');
        if (dataName) {
            dataName.innerText = name;
            document.getElementById('dataParts').innerText = parts;
            document.getElementById('dataGems').innerText = gems;
            document.getElementById('dataCoins').innerText = coins;
            document.getElementById('dataAvatar').classList.add(`avatar-${avatar}`);
        }
    }
}

export const removeData = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('avatar');
    localStorage.removeItem('parts');
    localStorage.removeItem('gems');
    localStorage.removeItem('coins');
}

const saveLogin = (email, password) => {
    if (document.getElementById('exampleCheck1').checked) {
        localStorage.setItem('email', email);
        return localStorage.setItem('password', password);
    }
    localStorage.removeItem('email');
    localStorage.removeItem('password');
}

const saveData = (response) => {
    localStorage.setItem('name', response.name);
    localStorage.setItem('avatar', response.avatar);
    localStorage.setItem('parts', response.parts);
    localStorage.setItem('gems', response.gems);
    localStorage.setItem('coins', response.coins);
}