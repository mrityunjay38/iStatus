import beacon from "./modules/beacon";
import extendSettings from "./utils/extendSettings";
import popUpAlert from "./utils/popUpAlert";

const iStatus = (config = Object.create(null)) => {
  config = extendSettings(config);

  setInterval(async () => {
    try {
      const res = await beacon();
      popUpAlert(config, res);
    } catch (err) {
      popUpAlert(config, err);
    }
  }, config.runEvery * 1000);
};

export default iStatus;
