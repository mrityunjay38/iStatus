import path from "path";

module.exports = {
    entry: 'src/app.js',
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
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                "loader": "babel-loader",
                "options": {
                    "presets": [
                        "env"
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