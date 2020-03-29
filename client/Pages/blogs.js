import Header from '../components/header'
import Link from 'next/link'
import axios from 'axios'
import BlogHead from '../Components/BlogHeader'

function BlogPage({ data, error }) {
    return (
        <div>
            <Header />
            <h1>博客页面</h1>
            <BlogHead />
            <ul>{data ? data.map((blog, index) => {
                return (
                    <li key={blog._id}>
                        <Link href="/blog/[id]" as={`/blog/${blog._id}`}>
                            <a>
                                <h1>{blog.title}</h1>
                            </a>
                        </Link>
                    </li>
                )
            }) : function () {
                return (
                    <p>failed:{err}</p>
                )
            }()}
            </ul>
        </div>
    )
}


export async function getStaticProps(context) {
    let data = null
    let err = null
    await axios.get('http://127.0.0.1:8000/blogs/list')
        .then((res) => {
            console.log(res.data)
            data = res.data
        })
        .catch((error) => {
            err = error
        })

    return {
        props: { data, err }
    }
}

export default BlogPage

