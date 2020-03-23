const deleteAlert = () => {
    setTimeout(() => {
        const alert = document.getElementById('iStatus');
        alert.remove();
    },5000);
}

export default deleteAlert;