const Router = require("koa-router")
const router = new Router()

const user = require("./userRoute")
router.use(user.routes())

module.exports = router