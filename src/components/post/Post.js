
function Post({id,title, body}) {

    return (
        <div>
            {id}
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
}

export default Post;