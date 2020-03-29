import Blog from '../model/blog_model'

export const getList = async () => {
    return new Promise((resolve, reject) => {
        Blog.find().select({ title: 1, author: 1, keyword: 1, abstract: 1 }).exec(async (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
}


export const addBlog = async (newBlog) => {
    console.log(newBlog)
    return new Promise((resolve, reject) => {
        Blog.create({
            ...newBlog
        }, async (err, blog) => {
            if (err) {
                reject(err)
                return
            }
            resolve(blog)
        })
    })
}

export const getDetail = async (blogId) => {
    return new Promise((resolve, reject) => {
        Blog.findOne({ _id: blogId },
            async (err, blog) => {
                if (err) {
                    reject(err)
                }
                if(!blog){
                    reject('博客不存在')
                }
                resolve(blog)
            })
    })
}

export const deleteBlog = async (blogId) => {
    return Blog.deleteOne({ _id: blogId }, (err) => {
        console.log(err)

        if (err) {
            console.log(err)
            return err
        }
        return true
    })
}

export const updateBlog = async (blogId, blogData) => {

    return Blog.updateOne({ id: blogId }, blogData, (err) => {
        if (err) {
            console.log('err', err)
            return err
        }
        return true
    })
}

