import '../css/stylesheet.scss';

const generateTemplate = (config,status) => {
    const theme = document.createElement('div');
    theme.id = 'iStatus';
    theme.className = config.theme + ' ' + config.mode;

    const container = document.createElement('div');
    container.className = 'container';

    const warning = document.createElement('div');
    warning.className = 'warning';

    if('icon' in config){
        const warningIcon = document.createElement('i');
        warningIcon.className = status === 'connected' ? config.icon.connected : config.icon.disconnected;
        warning.appendChild(warningIcon);
    }
    else{
        const warningImage = document.createElement('img');
        warningImage.src = status === 'connected' ? config.img.connected : config.img.disconnected;
        warning.appendChild(warningImage);
    }

    const message = document.createElement('div');
    message.className = 'message';

    const text = document.createElement('p');
    text.innerHTML = status === 'connected' ? config.message.connected : config.message.disconnected;

    message.appendChild(text);
    container.appendChild(warning);
    container.appendChild(message);
    theme.appendChild(container);

    return theme;
}

const template = (config,status) => {
    let selectedTemplate = null;

    if(typeof config === 'object'){
        selectedTemplate = generateTemplate(config,status);
    }

    return selectedTemplate;
}

export default template;