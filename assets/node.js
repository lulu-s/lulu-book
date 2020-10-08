// 🌙 代码块

// Node

// 1. 静态文件夹 / 静态页面
const express = require("express");
const app = express();
app.use('/', express.static('../public'))
// app.use('/', express.static(__dirname + '/public'));


// 2. 跨域
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// 3. bodyParser解析, 用 req.body 获取 post 参数
const express = require("express");
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.on({ 'limit': '50mb', extended: true }));
app.use(bodyParser.urlencoded({ 'limit': '50mb', extended: true }));

// 4. 搭建服务器及提示
const hostname = "localhost";
const port = 3000;

const express = require("express");
const app = express();
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
