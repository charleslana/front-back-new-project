export const hideTooltip = () => {
    $('[data-bs-toggle="tooltip"]').tooltip("hide");
}

export const addTooltip = () => {
    const tooltipTriggerList = [].slice.call($('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}