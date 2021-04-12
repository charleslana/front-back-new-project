export const hidePopover = () => {
    $('[data-bs-toggle="popover"]').popover("hide");
}

export const addPopover = () => {
    const popoverTriggerList = [].slice.call($('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}