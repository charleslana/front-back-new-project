const notifyToast = () => {
    const toast = document.getElementById('toast');
    const myToast = new bootstrap.Toast(toast);
    myToast.show();
}

export default notifyToast;