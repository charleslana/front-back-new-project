const addClickSearchBattlePvp = () => {
    $('#btnBattlePvp').on('click', (event) => {
        searchBattlePvp(event);
    });
    $('#btnBattlePvpCancel').on('click', (event) => {
        cancelBattlePvp(event);
    });
}

const searchBattlePvp = (event) => {
    $(event.target).addClass('d-none');
    $('#btnBattlePvpDisabled, #btnBattlePvpCancel').removeClass('d-none');
    $('.close-battle').attr("disabled", true);
}

const cancelBattlePvp = (event) => {
    $(event.target).addClass('d-none');
    $('#btnBattlePvpDisabled').addClass('d-none');
    $('#btnBattlePvp').removeClass('d-none');
    $('.close-battle').attr("disabled", false);
}

export default addClickSearchBattlePvp;