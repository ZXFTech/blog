const router = require('koa-router')()

import {
    createUser,
    login,
    getUserList
} from '../controller/user'
import { SuccessModel, ErrorModel } from '../model/resModel'


router.prefix('/user')

router.get('/', async (ctx, next) => {
    try {
        const result = await getUserList()
        ctx.body = new SuccessModel(result)
    } catch (err) {
        ctx.body = new ErrorModel(err)
    }
})

router.get('/:id', async (ctx, next) => {
    console.log(ctx.session)
    console.log('id', ctx.session.id)
    if (ctx.session.id && ctx.session.id === ctx.query.id) {
        try {
            const result = getUserDetail(ctx.session.id)
            ctx.body = new SuccessModel(result)
        } catch (err) {
            ctx.body = new ErrorModel(err)
        }
    } else {
        ctx.body = new ErrorModel('用户未登录!')
    }
})

router.post('/register', async (ctx, next) => {
    try {
        const newUser = ctx.request.body
        const result = await createUser(newUser)
        ctx.body = new SuccessModel(result)
    } catch (err) {
        console.log(err)
        ctx.body = new ErrorModel(err)
    }
})

router.post('/login', async (ctx, next) => {
    try {
        const result = await login(ctx.request.body)
        console.log(result)
        ctx.session.username = result.username
        ctx.session.id = result.id
        console.log(ctx.session)
        ctx.response.redirect('/index.html')
        ctx.body = new SuccessModel(result)
    } catch (error) {
        ctx.body = new ErrorModel(error)
    }
})

module.exports = router