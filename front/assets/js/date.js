export const yearDate = () => {
    const date = new Date;
    $('#yearDate').text(date.getFullYear());
}