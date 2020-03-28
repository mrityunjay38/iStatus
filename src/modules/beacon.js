const beacon = () => {
    return new Promise( (resolve,reject) => {
        const img = new Image();
        const foolCache = new Date().getTime();
        img.src = 'https://www.google.com/favicon.ico' + '?fool-cache=' + foolCache;
        img.onload = () => {resolve('connected')};
        img.onerror = () => {reject('disconnected')};
    });
}

export default beacon;