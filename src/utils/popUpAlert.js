import template from "../modules/template";
import deleteAlert from "../utils/deleteAlert";
import lastPopUp from "./lastPopUp.json";

const popUpAlert = (config, status) => {
  if (status === "disconnected") {
    const alert = template(config, status);
    if (lastPopUp.alert !== "disconnected") {
      document.body.appendChild(alert);
      lastPopUp.alert = status;
    }
  } else if (status === "connected" && lastPopUp.alert === "disconnected") {
    deleteAlert();

    const alert = template(config, status);
    document.body.appendChild(alert);

    deleteAlert(config.deleteAfter);
  }
};

export default popUpAlert;
