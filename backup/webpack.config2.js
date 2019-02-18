let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: {
        home: './src/index.js'
        // other: './src/other.js'
    },
    // 1) 源码映射，会单独生成一个source map文件，如果报错了，会表示当前报错的行和列
    //devtool: 'source-map', //增加映射文件，可以帮我们调试源代码
    // devtool: 'eval-source-map',
    // devtool: 'cheap-module-source-map',
    devtool:'cheap-module-eval-source-map',
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
            filename: 'index.html',
            // chunks: ['home'] //指定只能引入home.js
        })
        // new HtmlWebpackPlugin({
        //     template: './index.html',
        //     filename: 'other.html',
        //     chunks: ['other']
        // })
    ]
}
