import beacon from './modules/beacon';
import themeConfig from './themeConfig.json';
import popUpAlert from './utils/popUpAlert';

const iStatus = (config=themeConfig.basic) => {
    setInterval( async () => {
        try{
            const res = await beacon();
            popUpAlert(config,res);
        }
        catch(err){
            popUpAlert(config,err);
        }
    },config.runEvery * 1000);
}

export default iStatus;