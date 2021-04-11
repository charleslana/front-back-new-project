import notifyToast from './toast.js';

const addSubmitRegister = () => {
    $('#formRegister').submit((event) => {
        notifyToast();
        event.preventDefault();
    });
}

export default addSubmitRegister;