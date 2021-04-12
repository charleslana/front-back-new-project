export const showModalError = () => {
    const modalError = $('#modalError').get(0);
    const myModal = new bootstrap.Modal(modalError);
    myModal.show();
}

export const showModalSuccess = (message) => {
    const modalSuccess = $('#modalSuccess').get(0);
    const myModal = new bootstrap.Modal(modalSuccess);
    $('#modalSuccess .modal-body > span').text(message);
    myModal.show();
}