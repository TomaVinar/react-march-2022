import React from "react";

function Post({id, title, body, userId}) {

    return (
        <div>
            {id}
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
}

export default Post;