import config from './config.js';
import {showToast, hideToast} from './toast.js';
import loadingButton from './loadingButton.js';

export const addSubmitLogin = (openPageLogged) => {
    $('#formLogin').submit((event) => {
        event.preventDefault();
        const email = $('#exampleInputEmail1').val();
        const password = $('#exampleInputPassword1').val();
        if (!email || !password) {
            return showToast('Fill in the required fields.'); 
        }
        if (password.length < 6) {
            return showToast('The password must contain at least 6 characters.');
        }
        $.ajax({
            beforeSend: function() {
                loadingButton('#formLogin button', 'Login', true);
            },
            type: 'POST',
            url: `${config.urlBack}${config.apiLogin}`,
            data: {
                email: email,
                password: password
            },
            success: function(response) {
                if (response.status == 'success') {
                    hideToast();
                    saveLogin(email, password);
                    saveData(response);
                    return openPageLogged('home');
                }

                if (response.status == 'error') {
                    showToast(response.message);
                    return loadingButton('#formLogin button', 'Login', false);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                showToast(`Status: ${textStatus}<br>Error: ${errorThrown}`);
                loadingButton('#formLogin button', 'Login', false);
            },
            complete: function() {
                
            }
        });
    });
}

export const showSave = () => {
    if ($('#exampleCheck1').length) {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        if (email) {
            $('#exampleInputEmail1').val(email);
            $('#exampleInputPassword1').val(password);
            $('#exampleCheck1').attr('checked','checked');
        }
    }
}

export const showData = () => {
    const name = localStorage.getItem('name');
    const avatar = localStorage.getItem('avatar');
    const parts = localStorage.getItem('parts');
    const gems = localStorage.getItem('gems');
    const coins = localStorage.getItem('coins');
    $('#dataName').text(name);
    $('#dataAvatar').addClass(`avatar-${avatar}`);
    $('#dataParts').text(parts);
    $('#dataGems').text(gems);
    $('#dataCoins').text(coins);
}

export const removeData = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('avatar');
    localStorage.removeItem('parts');
    localStorage.removeItem('gems');
    localStorage.removeItem('coins');
}

const saveLogin = (email, password) => {
    if ($('#exampleCheck1').is(':checked')) {
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