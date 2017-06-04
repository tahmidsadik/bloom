const path = require('path');
/* global __dirname */
module.exports = {
    context: path.resolve(__dirname),
    entry: {
        signup: './web/static/elm/Signup/index.js'
    }, 
    output: {
        path: path.resolve(__dirname, 'priv/static/'),
        filename: '[name].js',
        publicPath: '/assets/'
    },

    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.elm$/,
            exclude: [/elm-stuff/, /node_modules/],
            loader: 'elm-webpack-loader'
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.styl$/,
            use: ['style-loader', 'css-loader', 'stylus-loader']
        }
        ]
    },
    devtool: 'cheap-module-source-map',
    target: 'web'
};
