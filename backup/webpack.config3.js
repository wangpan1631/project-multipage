let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: {
        home: './src/index.js'
    },
    output: {
        filename: '[name].js', // [name] name can be home or other
        path: path.resolve(__dirname, 'build')
    },
    watch: true,
    watchOptions: { //监控的选项
        poll: 1000, //每秒问我1000次
        aggregateTimeout: 300, //防抖的作用，300毫秒内只打包一次，比如：我一直输入12345...就不需要打包，等我停下来300毫秒之后打包
        ignored: /node_modules/ //不需要监控的文件
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
        })
    ]
}
