const router =require('koa-router')()
import {
    getList,
    addBlog,
    } from '../controller/blog'
import {SuccessModel,ErrorModel} from '../model/resModel'

router.prefix('/blogs')

router.get('/',async (ctx,next) => {
    const result = await getList()
    if (result) {
        ctx.body = new SuccessModel(result)
    }else{
        ctx.body = new ErrorModel('查询失败')
    }
})

router.get('/list',async (ctx,next) => {
    ctx.body = 'Blog List Page'
})

router.get('/detail',async (ctx,next)=>{
    ctx.body = 'Blog Detail Page'
})

router.post('/add',async (ctx,next) => {
    const result = await addBlog(ctx.request.body)
    if (result) {
        ctx.body=new SuccessModel(result)
    }else{
        ctx.body = new ErrorModel('添加失败!')
    }
})

router.post('/delete',async (ctx,next) => {
    ctx.body = 'I want delete an article to blog list!'
})

router.post('/update',async (ctx,next) => {
    ctx.body = 'I want update an article to blog list!'
})

module.exports = router