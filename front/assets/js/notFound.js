const notFound = (loadPage, message) => {
    document.getElementById('content').innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-5 text-center">
                    ${message}
                    <button type="button" class="btn btn-primary btn-lg" id="btnNotFound">Back previously</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('btnNotFound').addEventListener('click', () => {
        window.history.back();
        const location = window.location.pathname.replace(/^.*\//g, '');
        loadPage(location);
    });
}

export default notFound;