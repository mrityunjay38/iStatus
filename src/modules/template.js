import '../css/stylesheet.scss';

const generateTemplate = (layout,mode) => {
    const theme = document.createElement('div');
    theme.className = layout;

    const container = document.createElement('div');
    container.className = 'container ' + mode;

    const status = document.createElement('div');
    status.className = 'status';

    const image = document.createElement('img');
    image.src = 'https://www.google.com/favicon.ico';

    const message = document.createElement('div');
    message.className = 'message';

    const text = document.createElement('p');
    text.innerHTML = 'Connection lost';

    theme.appendChild(container);
    container.appendChild(status);
    container.appendChild(message);
    status.appendChild(image);
    message.appendChild(text);

    return theme;
}

const template = (option,mode) => {
    let selectedTemplate = null;

    if(typeof(option) === 'string'){
        selectedTemplate = generateTemplate(option,mode);
    }
    else {
        selectedTemplate = generateTemplate(option.theme);
    }
    return selectedTemplate;
}

export default template;