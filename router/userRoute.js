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

router.get('/test', userController.getUserName)
router.post("/login", controller.checkLogin)
router.post("/register", controller.registerUser)

module.exports = router