import config from './config.js';
import {showToast, hideToast} from './toast.js';
import {showModalSuccess} from './modal.js';

const addSubmitRegister = () => {
    $('#formRegister').submit((event) => {
        event.preventDefault();
        const email = $('#exampleInputEmail1').val();
        const password = $('#exampleInputPassword1').val();
        const confirmPassword = $('#exampleInputPassword2').val();
        if (password.length < 6) {
            return showToast('The password must contain at least 6 characters.');
        }
        if (password != confirmPassword) {
            return showToast('The confirmation password is wrong.');
        }
        $.ajax({
            beforeSend: function() {
                
            },
            type: 'POST',
            url: `${config.urlBack}/register.json`,
            data: {
                email: email,
                password: password
            },
            success: function(response) {
                if (response.status == 'success') {
                    hideToast();
                    showModalSuccess(response.message);
                    $('#formRegister').trigger('reset');
                    return false;
                }

                if (response.status == 'error') {
                    return showToast(response.message);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                showToast(`Status: ${textStatus}<br>Error: ${errorThrown}`);
            }
        });
    });
}

export default addSubmitRegister;