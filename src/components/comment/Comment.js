import React from "react";
import {Link} from "react-router-dom";

function Comment({postId, id, name, email, body}) {

    return (
        <div>
            {id} - {postId}
            <h4>{name}</h4>
            <h6>{email}</h6>
            <p>{body}</p>
            <Link to={'post/' + postId}><button>Get post</button></Link>
        </div>
    );
}

export default Comment;