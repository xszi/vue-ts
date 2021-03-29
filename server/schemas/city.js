
var mongoose = require('mongoose');

//用户的表结构
module.exports = new mongoose.Schema({
        data: {
            //用户名
            id: String,
            // 密码
            spell: String,
            //管理员用户
            name: String
        }
    }
);