import Link from 'next/link'

export default function Header() {
    return (
        <ul>
            <BlogLink title="首页" destination="index"/>
            <BlogLink title="博客" destination="blogs"/>
            <BlogLink title="联系我" destination="contact"/>
        </ul>
    )
}

const BlogLink = props => (
    <li>
        <Link href={`/${props.destination}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)