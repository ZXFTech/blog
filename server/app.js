require('@babel/register')


const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const session = require('koa-session')
const logger = require('koa-logger')
const statics = require('koa-static')
const path = require('path')


const blog  = require('./routes/blog')
const user  = require('./routes/user')

// 错误处理
onerror(app)

// 中间件
app.use(bodyparser({
    enablesTypes:['json','form','text']
}))
app.use(json())
app.use(logger())
const index = path.resolve(__dirname,'../public')
console.log('index',index)
app.use(require('koa-static')(index))

// 请求方法，路径及耗时
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })

  const sessionConfig = {
    // 配置 cookie
      path:'/',
      httpOnly:true,
      maxAge:24*60*60*1000
  }

// cookie 处理
app.keys = ['feline']  // 加密设置
app.use(session(sessionConfig,app))

// 路由添加
app.use(blog.routes(),blog.allowedMethods())
app.use(user.routes(),user.allowedMethods())

module.exports = app;