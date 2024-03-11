import { useEffect, useState } from "react"
import Ux from "./u"

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
        console.log(users);
    }, [])
    return (
        <div>
            <h3>Users: {users.length}</h3>
            {
                users.map(user =><Ux user={user}></Ux>)
            }
        </div>
    )
}