const path  = require('path');

module.exports = {
    mode: 'development',
    entry: ['babel-polyfill','./src/app.js'],
    output: {
        filename: 'engine.js',
        path: path.resolve(__dirname, 'build')
    },
    // Eslint loader
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'eslint-loader'
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                "loader": "babel-loader",
                "options": {
                    "presets": [
                        "@babel/preset-env"
                    ]
                }
            }
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    }
};