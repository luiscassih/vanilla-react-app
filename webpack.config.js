const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './App.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app-bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
            { test: /\.(jpg|png|gif|svg|pdf|ico|eot|svg|ttf|woff2?)$/, use: [
                    { loader: 'file-loader', options: { name: '[path][name]-[hash:8].[ext]'}}
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebPackPlugin({
            template: 'app/index.html'
        })
    ]
}