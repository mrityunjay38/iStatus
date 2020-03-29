import themeConfig from "../themeConfig.json";

const extendSettings = (customConfig, defaultConfig = themeConfig) => {
  let settings;

  if (!Object.keys(customConfig).length) {
    return defaultConfig.basic;
  } else {
    if (customConfig.theme in defaultConfig) {
      settings = defaultConfig[customConfig.theme];
    } else {
      settings = defaultConfig.basic;
    }

    for (let prop in customConfig) {
      if (Object.prototype.hasOwnProperty.call(settings, prop)) {
        settings[prop] = customConfig[prop];
      }
    }
  }

  return settings;
};

export default extendSettings;
