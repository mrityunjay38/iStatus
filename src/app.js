import Beacon from './modules/beacon';
import Template from './modules/template'

const iStatus = async () => {
    try{
        const res = await Beacon();
        console.log(res);
        if(res === 'Connected'){
            console.log('Hii');
            const template = Template('basic');
            console.log(template);
        }
    }
    catch(err){
        console.log(err);
    }
}

export default iStatus;