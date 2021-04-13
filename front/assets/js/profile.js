import config from './config.js';
import {showToast, hideToast} from './toast.js';

export const showProfile = () => {
    const myModalProfile = $('#modalProfile').get(0);
    myModalProfile.addEventListener('show.bs.modal', function (event) {
        const modal = $('.modal-body')[1];
        $('#modalProfile').find('.modal-body').removeClass('d-none');
        $('#modalProfile').find(modal).addClass('d-none');
        $('#modalProfile').find('button[data-bs-dismiss="modal"]').attr('disabled', true);
    });
    myModalProfile.addEventListener('shown.bs.modal', function (event) {
        loadProfile();
    });
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