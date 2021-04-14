export const yearDate = () => {
    const date = new Date;
    document.getElementById('yearDate').innerText = date.getFullYear();
}