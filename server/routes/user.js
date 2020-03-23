const router = require('koa-router')()

import {
    createUser,
    login,
    getUserList
} from '../controller/user'
import { SuccessModel, ErrorModel } from '../model/resModel'


router.prefix('/user')

router.get('/',async (ctx,next)=>{
    try {
        const result = await getUserList()
        ctx.body = new SuccessModel(result)
    } catch (err) {
        ctx.body = new ErrorModel(err)
    }
})

router.post('/register',async(ctx,next)=>{
    try {
    const newUser = ctx.request.body
        const result = await createUser(newUser)
        ctx.body = new SuccessModel(result)
    } catch (err) {
        ctx.body = new ErrorModel(err)
    }
})

router.post('/login',async(ctx,next)=>{
    try {
        const result = await login(ctx.request.body)
        ctx.body = new SuccessModel(result)
    } catch (err) {
        ctx.body = new ErrorModel(err)
    }
})

module.exports = router