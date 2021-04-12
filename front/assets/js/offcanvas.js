const hideOffcanvas = () => {
    const myOffcanvas = $('#offcanvasRight').get(0);
    const bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    bsOffcanvas.show();
    bsOffcanvas.hide();
}

export default hideOffcanvas;