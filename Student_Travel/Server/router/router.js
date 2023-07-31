//导入express
const express = require("express")
// 路由模块 
const router = express.Router();
const bodyParser = require("body-parser")
const login = require("../router_handler/user.js")
router.get("/login", bodyParser.json(), login.login)
router.post("/register", bodyParser.json(), login.register);
module.exports = router;
