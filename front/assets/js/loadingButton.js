const loadingButton = (event, text, active) => {
    const button = document.querySelector(event);

    if (active) {
        button.innerHTML = `
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ${text}
        `;
        return button.setAttribute('disabled', true);
    }

    button.innerHTML = text;
    button.removeAttribute('disabled');
}

export default loadingButton;