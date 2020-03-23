import template from  '../modules/template';
import deleteAlert from '../utils/deleteAlert';
import lastPopUp from './lastPopUp.json';

const popUpAlert = (config,status) => {
    if(status === 'disconnected'){
        const alert = template(config,status);
        document.body.appendChild(alert);
        lastPopUp.alert = status;    
        deleteAlert();    
    }
    else if(status === 'connected' && lastPopUp.alert === 'disconnected'){
        const alert = template(config,status);
        document.body.appendChild(alert);
        lastPopUp.alert = status;
        deleteAlert();
    }
}

export default popUpAlert;