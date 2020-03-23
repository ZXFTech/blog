import Blog from '../model/blog_model'

export const getList = async () => {
    return new Promise((resolve,reject)=>{
        Blog.find().select({title:1,author:1,keyword:1,abstract:1}).exec(async (err,result) =>{
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
}


export const addBlog =async (newBlog) => {
    return new Promise((resolve,reject) => {
        Blog.create({
            title:newBlog.title,
            author:newBlog.author,
            body:newBlog.body
        },async (err,blog) => {
            if (err) {
                reject(err)
                return
            }
            resolve(blog)
        })
    })
}

export const getDetail = async (blogTitle) => {
    return new Promise((resolve,reject) => {
        Blog.findOne({title:blogTitle},
            async (err,blog) => {
                if(err){
                    reject(err)
                    return
                }
                resolve(blog)
            })
    })
}

export const deleteBlog = async (blogId) => {
    return Blog.deleteOne({id:blogId}, (err)=>{
        console.log(err)

        if (err) {
            console.log(err)
            return err
        }
        return true
    })
}

export const updateBlog = async(blogId,blogData) => {

    return Blog.updateOne({id:blogId},blogData,(err)=>{
        if(err){
            console.log('err',err)
            return err
        }
        return true
    })
}

