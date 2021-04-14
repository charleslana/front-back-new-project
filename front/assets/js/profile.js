import config from './config.js';
import {showToast, hideToast} from './toast.js';

export const showProfile = () => {
    const myModalProfile = document.getElementById('modalProfile');
    if (myModalProfile) {
        myModalProfile.addEventListener('show.bs.modal', (event) => {
            document.querySelectorAll('#modalProfile .modal-body')[1].classList.add('d-none');
            document.querySelector('#modalProfile .modal-body').classList.remove('d-none');
            document.querySelectorAll('#modalProfile button[data-bs-dismiss="modal"]')[0].setAttribute('disabled', true);
            document.querySelectorAll('#modalProfile button[data-bs-dismiss="modal"]')[1].setAttribute('disabled', true);
        });
        myModalProfile.addEventListener('shown.bs.modal', (event) => {
            loadProfile();
        });
    }
}

const loadProfile = () => {
    fetch(`${config.urlBack}${config.apiProfile}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelectorAll('#modalProfile button[data-bs-dismiss="modal"]')[0].removeAttribute('disabled');
        document.querySelectorAll('#modalProfile button[data-bs-dismiss="modal"]')[1].removeAttribute('disabled');

        if (data.status == 'success') {
            hideToast();

            document.getElementById('profileTotalBattles').innerText = data.totalBattles;
            document.getElementById('profileTotalBattlesWin').innerText = data.totalBattlesWin;
            document.getElementById('profileTotalBattlesDefeat').innerText = data.totalBattlesDefeat;
            document.getElementById('profileTotalCards').innerText = data.totalCards;
            document.getElementById('profileInputName').value = data.name;

            document.querySelectorAll('#modalProfile .modal-body')[1].classList.remove('d-none');
            return document.querySelectorAll('#modalProfile .modal-body')[0].classList.add('d-none');
        }

        if (data.status == 'error') {
            return showToast(data.message);
        }
    })
    .catch((error) => {
        return showToast(`Error: ${error.message}`);
    });
}

export const addSubmitChangeName = () => {
    const form = document.getElementById('formChangeName');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    }
}