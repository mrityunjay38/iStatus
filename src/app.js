import Beacon from './modules/beacon.js';

const iStatus = async () => {
    try{
        const res = await Beacon();
        console.log(res);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = iStatus;