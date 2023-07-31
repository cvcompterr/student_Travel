const config = require("config")  // 导入配置文件
const router = require("./router/router.js")  // 导入路由
const port = config.get("server.port")
const server = config.get("server.host")
const express = require("express");   // 导入express框架
const cors = require("cors");  // 解决跨域问题
const bodyParser = require("body-parser");
const app = express();   // 实例化app
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);
app.listen(port, server, (err) => {
    if (err) console.log(err);
    console.log(`${server} has running at ${port}`);
})