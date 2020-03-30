<p align="center">
  <a href="#">
    <img src="https://raw.githubusercontent.com/mrityunjay38/iStatus/master/assets/iStatus-logo.png">
  </a>
</p>
<p align="center">A plugin to beautify internet status alert.</p>

<p align="center">
<a href="https://www.npmjs.com/package/istatus"><img src="https://img.shields.io/npm/v/istatus.svg" alt="npm istatus version"></a>
<a href="https://www.jsdelivr.com/package/npm/istatus"><img src="https://data.jsdelivr.com/v1/package/npm/istatus/badge" alt="jsdelivr downloads"></a>
<a href="https://github.com/mrityunjay38/iStatus/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mrityunjay38/istatus.svg" alt="license mit"></a>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/mrityunjay38/iStatus/develop/assets/istatus-alert.gif" alt="istatus alert gif">
</p>

## Installation
```bash
npm install istatus --save
```
or

```bash
yarn add istatus
```

or use CDN

```javascript
<script src="https://cdn.jsdelivr.net/npm/istatus@1.0.5/build/istatus.min.js">
```

## Usage

### ES6 Module
```javascript
import iStatus from 'iStatus';

iStatus();
```

### CommonJs
```javascript
const iStatus = require('iStatus');

iStatus();
```

### Browsers
```javascript
<script src='https://cdn.jsdelivr.net/npm/istatus@1.0.5/build/istatus.min.js'></script>

<script>
    window.onload = function () {
        iStatus();
    }
</script>
```

## Available default themes

```javascript
{
  "basic": {
    "theme" : "basic",
    "mode" : "light",
    "icon" : {
      "connected": "check",
      "disconnected": "cross"
    },
    "message" : {
      "connected" : "Internet connected",
      "disconnected" : "Internet disconnected"
    },
    "runEvery" : 30,
    "deleteAfter" : 10,
    "position" : "bottomLeft"
  }
}
```

## How to use iStatus ?

The most basic way is to use default settings.
```javascript
iStatus();
```
or you may extend default theme settings
```javascript
iStatus({
    "theme": "basic",
    "mode": "dark"
});
```
or 
```javascript
iStatus({
    "theme": "basic",
    "message": {
        "connected": "Connected",
        "disconnected": "Disconnected"
    },
    "runEvery": 60,
    "deleteAfter": 15,
    "position": "topRight"
});
```
or use fontawesome like icons/images
```javascript
iStatus({
    "theme": "basic",
    "icon": {
        "connected": "fas fa-wifi",
        "disconnected": "fas fa-wifi-slash"
    }
});
```

## Notification configuration

| Property    | Description                                                                                                                   | Type   | Default                                                                | Options                                                                     |
|-------------|-------------------------------------------------------------------------------------------------------------------------------|--------|------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| theme       | Name of the theme to use. Ex: CSS class name                                                                                  | string | basic                                                                  | Future developments                                                         |
| mode        | Light/Dark UI for notification.                                                                                               | string | light                                                                  | "light", "dark"                                                             |
| icon        | Small message icons inside the notification.  Note: Higher precendence over property "image". If used, will overwrite "image" | string | connected: "check symbol", disconnected: "cross symbol"                | Can pass fontawesome like class names  Ex: fas fa-wifi or fas fa-wifi-slash |
| message     | Notification message to show inside the notification.                                                                         | string | connected: "Internet connected", disconnected: "Internet disconnected" | Pass own message as an object. Check how to use section.                    |
| runEvery    | Will check internet status every mentioned number of seconds. Suitable value is 30 or above.                                  | number | 30                                                                     | Type in seconds.                                                            |
| deleteAfter | Will remove notification once status changes to connected automatically.                                                      | number | 10                                                                     | Type in seconds.                                                            |
| position    | Align the notification in four different positions.                                                                           | string | bottomLeft                                                             | bottomLeft, bottomRight, topLeft, topRight                                  |

## Contributing

### If you're changing the core library:
1. Clone repository and run npm install.
2. Make changes in the `src` and add theme configuration inside the themeConfig.js file, if any.
3. Test build at your end properly.
4. Submit pull request.

### If you're changing the documentation:
1. Make changes in the `readme.md` file and explain everything well.
2. Preview changes and make sure everything is aligned.
3. Submit pull request