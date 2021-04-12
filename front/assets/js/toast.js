export const showToast = (message) => {
    const toast = $('#toast').get(0);
    const myToast = new bootstrap.Toast(toast);
    $('#toast .toast-body').html(message);
    myToast.show();
}

export const hideToast = () => {
    const toast = $('#toast').get(0);
    const myToast = new bootstrap.Toast(toast);
    myToast.hide();
}