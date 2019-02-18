let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //多入口 多页
    mode: 'production',
    entry: {
        home: './src/index.js',
        other: './src/other.js'
    },
    output: {
        filename: '[name].js', // [name] name can be home or other
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
            filename: 'home.html',
            chunks: ['home'] //指定只能引入home.js
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'other.html',
            chunks: ['other']
        })
    ]
}
