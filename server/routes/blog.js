const router = require('koa-router')()
import {
    getList,
    getDetail,
    addBlog,
    deleteBlog,
    updateBlog
} from '../controller/blog'
import { SuccessModel, ErrorModel } from '../model/resModel'

router.prefix('/blogs')

router.get('/', async (ctx, next) => {
    ctx.response.redirect('/blogs/list')
})

router.get('/list', async (ctx, next) => {
    try {
        const result = await getList()
        console.log(result)
        ctx.body = result
    } catch (err) {
        console.error(err)
        ctx.body = err
    }
})

router.get('/detail', async (ctx, next) => {
    try {
        const blogId = ctx.query.id
        const result = await getDetail(blogId)
        ctx.body=result

    } catch (err) {
        console.log('err',err)
        ctx.body = err
    }
})

router.post('/add', async (ctx, next) => {
    try {
        console.log(ctx.request.body)
        const result = await addBlog(ctx.request.body)
        ctx.body = new SuccessModel(result)

    } catch (err) {
        ctx.body = new ErrorModel('添加失败!')

    }
})

router.post('/delete', async (ctx, next) => {
    try {
        const result = deleteBlog(ctx.query.id)
        ctx.body = new SuccessModel(result)
    } catch (err) {
        ctx.body = new ErrorModel(result)
    }
})

router.post('/update', async (ctx, next) => {
    try {
        const blogId = ctx.query.id
        const blogData = ctx.request.body
        const result = await updateBlog(blogId, blogData)
        ctx.body = new SuccessModel(result)
    } catch (error) {
        ctx.body = new ErrorModel(result)
    }
})

module.exports = router