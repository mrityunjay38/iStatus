import beacon from './modules/beacon';
import themeConfig from './themeConfig.json';
import popUpAlert from './utils/popUpAlert';

// let lastPopUp = null;

// const popUpAlert = (config,status) => {
//     if(status === 'disconnected'){
//         const alert = template(config,status);
//         document.body.appendChild(alert);
//         lastPopUp = status;    
//         deleteAlert();    
//     }
//     else if(status === 'connected' && lastPopUp === 'disconnected'){
//         const alert = template(config,status);
//         document.body.appendChild(alert);
//         lastPopUp = status;
//         deleteAlert();
//     }
// }

export const iStatus = (config=themeConfig.basic) => {
    setInterval( async () => {
        try{
            const res = await beacon();
            popUpAlert(config,res);
        }
        catch(err){
            popUpAlert(config,err);
        }
    },config.timeout * 1000);
}