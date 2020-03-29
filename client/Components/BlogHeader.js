import Link from 'next/link'
import axios from 'axios'
import Router from 'next/router'

const blogOperations = ['add','update']

export default function BlogHeader(props){

    function deleteBlog(){
        const id = props.id
        axios.post(`http://localhost:8000/blogs/delete?id=${id}`)
        .then((res)=>{
            console.log(res)
            Router.push('/blogs')
        })
    }

    return (
        <div>
            <ul>
                {blogOperations.map((operation,index) => {
                    return (
                        <li key={index}>
                            <Link href='/operation/[operation]' as={`/operation/${operation}`}>
                                <a>{operation}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <input type="button" onClick={deleteBlog} value="删除"/>
        </div>
    )
}