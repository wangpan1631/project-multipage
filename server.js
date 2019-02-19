let express = require('express');
let app = express();
let webpack = require('webpack');
//中间件
let middle = require('webpack-dev-middleware');
let config = require('./webpack.config.js');
let complier = webpack(config);
app.use(middle(complier));
app.get('/user', (req, res) => {
    res.json({name: 'wangpan'})
})
app.listen(3009);