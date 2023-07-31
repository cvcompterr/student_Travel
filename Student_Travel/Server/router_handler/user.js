const db = require("../db/index")
exports.login = function (req, res) {
    console.log(req.query);
    let username = req.query.username;
    let password = req.query.password;
    const selectSql = `select username,password from user where username =${username} and password =${password} `;
    db.query(selectSql, (err, data) => {   // 参数的顺序不能变
        if (err) return console.log(err.message);
        // res.send(data)
        if (data[0] === undefined) {
            res.send({
                status: 0,
                message: "账号或密码错误"
            })
        } else {
            res.send({
                status: 1,
                message: "登录成功"
            })
        }
    })
}

exports.register = function (req, res) {
    let name = JSON.stringify(req.body.username);
    console.log(name);
    let params = [
        name,
        req.body.password,
        req.body.telephone,
    ];
    if (params[0] === "" || params[1] === "" || params[2] === "") {
        res.send({
            status: 2,
            message: "信息不能为空"
        })
    }
    let username = req.body.username
    const registerSql = `insert into user set username=? , password=? , telephone=? `;
    const newselectSql = `select username from user where username =${username} `
    db.query(newselectSql, (err, data) => {
        console.log("data", data);
        if (err) {
            return console.log(err.message)
        }
        else if (data[0] === undefined) {
            db.query(registerSql, params, (err, data) => {
                if (err) return console.log(err.message);
                try {
                    res.send({
                        status: 1,
                        message: "注册成功"
                    });
                } catch (err) {
                    console.log("注册失败");
                }
            })
        } else {
            res.send({
                status: 0,
                message: "账号已存在"
            })
        }
    })
}