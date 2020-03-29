import mongoose from 'mongoose'
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: String,
    author: String,
    content: String,
    comments:[{
        name:String,
        contact:{
            QQ:Number,
            WeChat:Number,
            Email:String
        },
        body:String,
        date:Date}],
    date:{
        type:Date,
        default:Date.now
    },
    hidden:Boolean,
    meta:{
        favs:Number
    }
})

const Blog = mongoose.model('Blog',blogSchema)

export default Blog