const hideOffcanvas = () => {
    const myOffcanvas = document.getElementById('offcanvasRight');
    const bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    bsOffcanvas.show();
    bsOffcanvas.hide();
}

export default hideOffcanvas;