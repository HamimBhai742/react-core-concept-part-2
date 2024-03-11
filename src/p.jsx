export default function Px({post}) {
    console.log(post);
    const {id,title,body} = post
    console.log(id);
    return (
        <div className="post">
         <p>Id: {id}</p>
         <h4>Titel: {title}</h4>
         <p>Body: {body}</p>
        </div>
    )
}