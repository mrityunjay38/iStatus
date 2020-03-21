import Beacon from './modules/beacon';
import Template from './modules/template'

export const iStatus = async (theme='basic',mode='light') => {
    try{
        const res = await Beacon();
        console.log(res);
        if(res === 'Connected'){
            const template = Template(theme,mode);
            document.body.appendChild(template);
        }
    }
    catch(err){
        console.log(err);
    }
}