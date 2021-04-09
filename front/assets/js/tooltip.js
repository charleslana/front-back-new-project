export const hideTooltip = () => {
    $('[data-bs-toggle="tooltip"]').tooltip("hide");
}

export const addTooltip = () => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
}