export const showModalError = (message) => {
    const modalError = document.getElementById('modalError');
    const myModal = new bootstrap.Modal(modalError);
    document.querySelector('#modalError .modal-body > span').innerText = message;
    myModal.show();
}

export const showModalSuccess = (message) => {
    const modalSuccess = document.getElementById('modalSuccess');
    const myModal = new bootstrap.Modal(modalSuccess);
    document.querySelector('#modalSuccess .modal-body > span').innerText = message;
    myModal.show();
}