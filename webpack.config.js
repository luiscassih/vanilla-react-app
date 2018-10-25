const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './App.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app-bundle.js'
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.(jpg|png|gif|svg|pdf|ico)$/, use: [
                    { loader: 'file-loader', options: { name: '[path][name]-[hash:8].[ext]'}}
                ]
            }
        ]
    },
    mode: 'development',
    plugins : [
        new HtmlWebPackPlugin({
            template: 'app/index.html'
        })
    ]
}