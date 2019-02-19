let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let webpack = require('webpack');
module.exports = {
    mode: 'production',
    entry: {
        home: './src/index.js'
    },
    output: {
        filename: '[name].[hash:8].js', // [name] name can be home or other
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin('./build'),
        new CopyWebpackPlugin([{from: 'doc', to: './'}]),
        new webpack.BannerPlugin('made by wangpan 2019')
    ]
}
