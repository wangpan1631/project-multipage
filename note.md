#### 多页应用

2.18
#### source-map
调试打包后的代码，生成源码映射
webpack.config.js文件中配置：
1. source-map -> 源码映射，会单独生成一个source-map文件，出错了，会标识报错的行和列
```
module.exports = {
    "devtool": "source-map" 
}
```
2. eval-source-map -> 不会产生单独的文件，但是会显示报错的行和列
```
module.exports = {
    "devtool": "eval-source-map" 
}
```
3. cheap-module-source-map -> 不会产生列，但是是一个单独的文件，产生后可以保留起来
```
module.exports = {
    "devtool": "cheap-module-source-map"
}
```
4. cheap-module-eval-source-map -> 不会产生文件，不会产生列，集成在打包后的文件中，这种方式在开发环境更加快一些
```
module.exports = {
    "devtool": "cheap-module-eval-source-map"
}
```

#### watch的用法
监听文件的变化, 监听到文件变化，就自动编译打包

#### webpack的小插件
1. cleanWebpackPlugin -> 清除上一次打包的文件
2. copyWebpackPlugin -> 拷贝插件
3. bannerPlugin -> webpack 内置的插件（打包后的文件的版权声明文字）

#### webpack.DefinePlugin插件的使用：用来定义全局变量，在webpack打包的时候对这些变量做替换

#### webpack跨域问题

**webpack-dev-middleware** webpack开发服务的中间件(可以在服务端启动webpack)
npm i webpack-dev-middleware -D

#### resolve
commonjs模块查找，先找node_modules目录下的文件，找不到的话再向上查找
```
module.exports = {
    resolve: {
        extensions: ['.js', '.css', '.json', '.vue'], //自动添加引入文件的后缀
        modules: [path.resolve('node_modules')],
        mainFields: ['style', 'main'], //查找模块顺序
        alias: {
            bootstrap: 'bootstrap/dist/css/bootstrap.css'
        }
    }
}
```

#### 定义环境变量
webpack内置的插件,webpack.DefinePlugin()
```
plugins: [
    new webpack.DefinePlugin({
        DEV: JSON.stringify('dev'), // String 'dev'
        FLAG: 'true', // Boolean true
        EXPRESSION: '1+1' // Number 2
    })
]
```

#### webpack-merge
有一个基础配置文件：webpack.base.js
开发配置文件：webpack.dev.js
生产配置文件：webpack.prod.js

#### webpack 优化