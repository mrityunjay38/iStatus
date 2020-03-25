import lastPopUp from './lastPopUp.json';

const deleteAlert = (deleteAfter=0) => {
    setTimeout(() => {
        const alert = document.getElementById('iStatus');
        alert.remove();
        lastPopUp.alert = null;
    }, deleteAfter * 1000);
}

export default deleteAlert;