import { useEffect, useState } from "react"
import Px from "./p"
export default function Post() {

    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div>
            <h3>Post: {posts.length}</h3>
            {
                posts.map((post) => <Px post={post}></Px>)
            }
        </div>
    )
}