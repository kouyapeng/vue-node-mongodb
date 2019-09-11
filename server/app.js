const Koa = require('koa');
const app = new Koa();



// 跨域
const cors = require('koa-cors');

const userR = require('./router/user.js')
var bodyParser = require('koa-bodyparser');
app.use(bodyParser());




app.use(cors());

app.use(userR.routes())
app.use(userR.allowedMethods());

app.listen(3000);