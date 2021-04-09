const addSubmitLogin = (openPageLogged) => {
    $('#formLogin').submit((event) => {
        openPageLogged('home');
        event.preventDefault();
    });
}

export default addSubmitLogin;