const showLoading = () => {
    return `
    <div class="container">
        <div class="mt-5 d-flex justify-content-center">
            <div class="spinner-border spinner-border-lg" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
    `;
}

export default showLoading;