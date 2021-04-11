const notFound = (loadPage) => {
    $('#content').html(`
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-5 text-center">
                    <h1>Oops!</h1>
                    <h2>404 Not found</h2>
                    <p>Sorry, this page not found.</p>
                    <button type="button" class="btn btn-primary btn-lg" id="btnNotFound">Back previously</button>
                </div>
            </div>
        </div>
    `);
    $('#btnNotFound').on('click', () => {
        window.history.back();
        const location = window.location.pathname.replace(/^.*\//g, '');
        loadPage(location);
    });
}

export default notFound;