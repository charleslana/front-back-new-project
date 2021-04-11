export const showModalError = () => {
    const modalError = document.getElementById('modalError');
    const myModal = new bootstrap.Modal(modalError);
    myModal.show();
}

export const showModalSuccess = (message) => {
    const modalSuccess = document.getElementById('modalSuccess');
    const myModal = new bootstrap.Modal(modalSuccess);
    $('#modalSuccess .modal-body > span').text(message);
    myModal.show();
}