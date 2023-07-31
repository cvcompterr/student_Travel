const mysql = require('mysql');
const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "student_travel",
})

// 监测数据库是否可以工作
db.query("select 1", (err, result) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(result);
})
module.exports = db;