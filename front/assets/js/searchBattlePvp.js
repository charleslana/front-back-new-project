import loadingButton from './loadingButton.js';

const addClickSearchBattlePvp = () => {
    const battlePvp = document.getElementById('btnBattlePvp');
    if (battlePvp) {
        battlePvp.addEventListener('click', () => {
            searchBattlePvp();
        });
    }
    const battlePvpCancel = document.getElementById('btnBattlePvpCancel');
    if (battlePvpCancel) {
        battlePvpCancel.addEventListener('click', () => {
            cancelBattlePvp();
        });
    }
}

const searchBattlePvp = () => {
    loadingButton('#btnBattlePvp', 'Search opponent', true);
    document.getElementById('btnBattlePvpCancel').classList.remove('d-none');
    document.querySelector('.close-battle').setAttribute('disabled', true);
}

const cancelBattlePvp = () => {
    loadingButton('#btnBattlePvp', '<i class="bi bi-search"></i> Search opponent', false);
    document.getElementById('btnBattlePvpCancel').classList.add('d-none');
    document.querySelector('.close-battle').removeAttribute('disabled');
}

export default addClickSearchBattlePvp;