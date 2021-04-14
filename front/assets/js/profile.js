import config from './config.js';
import {showToast, hideToast} from './toast.js';

export const showProfile = () => {
    const myModalProfile = document.getElementById('modalProfile');
    if (myModalProfile != null) {
        myModalProfile.addEventListener('show.bs.modal', function (event) {
            document.querySelectorAll('#modalProfile .modal-body')[1].classList.add('d-none');
            document.querySelector('#modalProfile .modal-body').classList.remove('d-none');
            document.querySelectorAll('#modalProfile button[data-bs-dismiss="modal"]')[0].setAttribute('disabled', true);
            document.querySelectorAll('#modalProfile button[data-bs-dismiss="modal"]')[1].setAttribute('disabled', true);
        });
        myModalProfile.addEventListener('shown.bs.modal', function (event) {
            loadProfile();
        });
    }
}

const loadProfile = () => {
    $.ajax({
        beforeSend: function() {
            
        },
        type: 'GET',
        url: `${config.urlBack}${config.apiProfile}`,
        data: {

        },
        success: function(response) {
            if (response.status == 'success') {
                hideToast();
                const modal = $('.modal-body')[1];
                $('#profileTotalBattles').text(response.totalBattles);
                $('#profileTotalBattlesWin').text(response.totalBattlesWin);
                $('#profileTotalBattlesDefeat').text(response.totalBattlesDefeat);
                $('#profileTotalCards').text(response.totalCards);
                $('#profileInputName').val(response.name);
                $('#modalProfile').find('.modal-body').addClass('d-none');
                return $('#modalProfile').find(modal).removeClass('d-none');
            }

            if (response.status == 'error') {
                return showToast(response.message);
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            showToast(`Status: ${textStatus}<br>Error: ${errorThrown}`);
        },
        complete: function() {
            $('#modalProfile').find('button[data-bs-dismiss="modal"]').attr('disabled', false);
        }
    });
}

export const addSubmitChangeName = () => {
    $('#formChangeName').submit((event) => {
        event.preventDefault();
    });
}