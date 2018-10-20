const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './App.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app-bundle.js'
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
        ]
    },
    mode: 'development',
    plugins : [
        new HtmlWebPackPlugin({
            template: 'app/index.html'
        })
    ]
}