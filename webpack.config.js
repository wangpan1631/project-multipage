let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
// let CleanWebpackPlugin = require('clean-webpack-plugin');
// let CopyWebpackPlugin = require('copy-webpack-plugin');
// let webpack = require('webpack');
module.exports = {
    mode: 'production',
    entry: {
        home: './src/index.js'
    },
    output: {
        filename: '[name].[hash:8].js', // [name] name can be home or other
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        // 1)
        // proxy: { //配置了一个代理
        //     '/api': {
        //         target: 'http://localhost:3009',
        //         pathRewrite: {'/api': ''}
        //     }
        // }
        // 2) 前端只想单独来模拟数据
        // before(app){
        //     app.get('/user', (req, res) => {
        //         res.json({name: 'wangpan-before'})
        //     })
        // }
        // 3) 有服务端，不用用代理来处理，能不能在服务端中启动webpack，端口用服务端端口
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
        // new CleanWebpackPlugin('./build'),
        // new CopyWebpackPlugin([{from: 'doc', to: './'}]),
        // new webpack.BannerPlugin('made by wangpan 2019')
    ]
}
