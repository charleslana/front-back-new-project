import notifyToast from './toast.js';
import {showModalSuccess} from './modal.js';

const addSubmitRegister = () => {
    $('#formRegister').submit((event) => {
        event.preventDefault();
        const email = $('#exampleInputEmail1').val();
        const password = $('#exampleInputPassword1').val();
        const confirmPassword = $('#exampleInputPassword2').val();
        if (password.length < 6) {
            return notifyToast('The password must contain at least 6 characters.');
        }
        if (password != confirmPassword) {
            return notifyToast('The confirmation password is wrong.');
        }
        showModalSuccess('Registration completed successfully, please login to your account.');
        $('#formRegister').trigger('reset');
    });
}

export default addSubmitRegister;