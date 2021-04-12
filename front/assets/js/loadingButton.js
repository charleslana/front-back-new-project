const loadingButton = (event, text, active) => {
    if (active) {
        return $(event).html(`
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ${text}
        `).attr('disabled', true);
    }

    $(event).html(text).attr('disabled', false);
}

export default loadingButton;