const Koa = require("koa")
const path = require("path")
const router = require("./router/router")
const Cors = require("koa2-cors")
const koaBody = require("koa-body")
const source = require("koa-static")
// Koa-router 请求方式： get 、 put 、 post 、 patch 、 delete 、 del 
const app = new Koa()

app.use(Cors())
app.use(koaBody({
	multipart: true,
	formidable: {
		uploadDir: path.resolve(__dirname, 'temp'), // 文件存放地址
		keepExtensions: true,
		maxFieldsSize: 2 * 1024 * 1024
	}
}))
app.use(router.routes())
app.use(router.allowedMethods())

app.use(source(path.resolve(__dirname, "public/static")))

console.log("项目启动http://127.0.0.1:3000")
app.listen(3000)
