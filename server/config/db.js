var mongoose = require('mongoose');
var url="mongodb://localhost:27017/book"
mongoose.connect(url, { useNewUrlParser: true }, err => {
    if (err) {
        console.log('数据库连接失败');
        return;
    }
    console.log('Mongodb connect success!');
});

module.exports = mongoose;