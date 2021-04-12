import config from './config.js';
import {showToast, hideToast} from './toast.js';
import loadingButton from './loadingButton.js';

const addSubmitLogin = (openPageLogged) => {
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
            url: `${config.urlBack}/login.json`,
            data: {
                email: email,
                password: password
            },
            success: function(response) {
                if (response.status == 'success') {
                    hideToast();
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

export default addSubmitLogin;