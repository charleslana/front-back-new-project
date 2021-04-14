export const hidePopover = () => {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map((popoverTriggerEl) => {
        const myPopover = new bootstrap.Popover(popoverTriggerEl);
        myPopover.show();
        myPopover.hide();
    });
}

export const addPopover = () => {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map((popoverTriggerEl) => {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}