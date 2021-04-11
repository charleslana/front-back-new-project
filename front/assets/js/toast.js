const notifyToast = (message) => {
    const toast = document.getElementById('toast');
    const myToast = new bootstrap.Toast(toast);
    $('#toast .toast-body').text(message);
    myToast.show();
}

export default notifyToast;