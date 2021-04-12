import loadingButton from './loadingButton.js';

const addClickSearchBattlePvp = () => {
    $('#btnBattlePvp').on('click', () => {
        searchBattlePvp();
    });
    $('#btnBattlePvpCancel').on('click', () => {
        cancelBattlePvp();
    });
}

const searchBattlePvp = () => {
    loadingButton('#btnBattlePvp', 'Search opponent', true);
    $('#btnBattlePvpCancel').removeClass('d-none');
    $('.close-battle').attr("disabled", true);
}

const cancelBattlePvp = () => {
    loadingButton('#btnBattlePvp', '<i class="bi bi-search"></i> Search opponent', false);
    $('#btnBattlePvpCancel').addClass('d-none');
    $('.close-battle').attr("disabled", false);
}

export default addClickSearchBattlePvp;