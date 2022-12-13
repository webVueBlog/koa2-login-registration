const Router = require("koa-router")
const router = new Router()
const controller = require("../controller/userController")

class UserController {
	async getUserName(ctx) {
		ctx.body = {
			code: 200,
			message: 'jeskson',
			type: 'warning'
		}
	}
}

const userController = new UserController()

router.get('/', (ctx) => {
	ctx.set('Content-Type', 'text/html', 'utf-8');
	ctx.body = `
	<!doctype html>
	<html>
		<body>
			<form action="/login" enctype="application/json" method="post">
				<input type="text" name="phone" placeholder="phone">
				<br>
				<input type="text" name="password" placeholder="password">
				<br>
				<button type="submit">登录</button>
			</form>
			<br>
			<form action="/register" enctype="application/json" method="post">
				<input type="text" name="phone" placeholder="phone">
				<br>
				<input type="text" name="password" placeholder="password">
				<br>
				<button type="submit">注册</button>
			</form>
		</body>
	</html>
	`
})

router.get('/test', userController.getUserName)
router.post("/login", controller.checkLogin)
router.post("/register", controller.registerUser)

module.exports = router