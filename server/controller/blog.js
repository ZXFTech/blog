import Blog from '../model/blog_model'

export const getList = async () => {
    return new Promise((resolve,reject)=>{
        Blog.find(async (err,result) =>{
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

