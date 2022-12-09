const Koa = require("koa")
const router = require("./router/router")
const Cors = require("koa2-cors")
const koaBody = require("koa-body")
// Koa-router 请求方式： get 、 put 、 post 、 patch 、 delete 、 del 
const app = new Koa()

app.use(Cors())
app.use(koaBody())
app.use(router.routes())
app.use(router.allowedMethods({}))

console.log("项目启动http://127.0.0.1:3000")
app.listen(3000)
