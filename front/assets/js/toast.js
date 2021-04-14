export const showToast = (message) => {
    const toast = document.getElementById('toast');
    const myToast = new bootstrap.Toast(toast);
    document.querySelector('#toast .toast-body').innerHTML = message;
    myToast.show();
}

export const hideToast = () => {
    const toast = document.getElementById('toast');
    const myToast = new bootstrap.Toast(toast);
    myToast.hide();
}