export const showToast = (message) => {
    const toast = document.getElementById('toast');
    const myToast = new bootstrap.Toast(toast);
    $('#toast .toast-body').html(message);
    myToast.show();
}

export const hideToast = () => {
    const toast = document.getElementById('toast');
    const myToast = new bootstrap.Toast(toast);
    myToast.hide();
}