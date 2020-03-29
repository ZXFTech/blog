import axios from 'axios'
import fetch from 'node-fetch'
import Header from '../../components/header'
import BlogHeader from '../../components/BlogHeader'

function BlogDetail({blog}) {

    return (
        <div>
            <Header />
            <BlogHeader id={blog._id}/>
            <h1>{blog.title}</h1>
            <p>{blog.author}</p>
            <p>{blog.content}</p>
            <p>{blog.comment}</p>
            <p>{blog.date}</p>
        </div>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:8000/blogs/list')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map(post => ({
      params: { id: post._id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  

export async function getStaticProps({params}) {
    const id = params.id
    console.log(id)
    let blog = null
    await axios.get(`http://localhost:8000/blogs/detail?id=${id}`)
    .then((res)=>{
        blog = res.data
    })
    .catch((error)=>{
        console.log(error)
    })

    return {
        props:{
            blog
        }
    }
}

export default BlogDetail