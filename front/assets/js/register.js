import config from './config.js';
import {showToast, hideToast} from './toast.js';
import {showModalSuccess} from './modal.js';
import loadingButton from './loadingButton.js';

const addSubmitRegister = () => {
    const form = document.getElementById('formRegister');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = document.getElementById('exampleInputEmail1').value;
            const password = document.getElementById('exampleInputPassword1').value;
            const confirmPassword = document.getElementById('exampleInputPassword2').value;

            if (!email || !password || !confirmPassword) {
                return showToast('Fill in the required fields.'); 
            }
            if (password.length < 6) {
                return showToast('The password must contain at least 6 characters.');
            }
            if (password != confirmPassword) {
                return showToast('The confirmation password is wrong.');
            }

            loadingButton('#formRegister button', 'Register', true);

            fetch(`${config.urlBack}${config.apiRegister}`, {
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
                loadingButton('#formRegister button', 'Register', false);

                if (data.status == 'success') {
                    hideToast();
                    showModalSuccess(data.message);
                    return document.getElementById('formRegister').reset();
                }

                if (data.status == 'error') {
                    return showToast(data.message);
                }
            })
            .catch((error) => {
                return showToast(`Error: ${error.message}`);
            });
        });
    }
}

export default addSubmitRegister;