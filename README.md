# koa2-login-registration

koa2-login-registration Koa2实现基本的登录注册

koa是一个基于node实现的一个新的web框架，由express框架的原版人马打造，特点是优雅，简洁，表达力强，自由度高，与express比，是一个更轻量的node 框架，可以用插件实现功能。

koa2 来实现mvc框架，主要包含Controller控制层和Service业务层。Controller层主要对用户的请求参数进行处理（校验，转换），调用对应的service方法处理业务，得到业务结果后封装并返回。

Service层就是在复杂业务场景下用于做业务逻辑封装的一个抽象层。

功能比较单一，可以用mvc的 规范来。

## 文件结构

```js
config
 DBconfig.js // 数据库配置文件
controller
 userController.js
lib
 mysql.js // 连接Mysql
router
 router.js // 总路由
 userRoute.js
service
 user.js
app.js // 入口文件
package.json
```

实现一个简单的koa2+mysql的登录注册。

## 资源压缩-zlib(ok)


