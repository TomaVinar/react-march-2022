import React, {useEffect, useState} from "react";

import Comment from "../comment/Comment";

function Comments() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(comments => setComments(comments))
    }, []);


    return (
        <div>
            {comments.map(comment => <Comment key={comment.id}
                                              id={comment.id}
                                              postId={comment.postId}
                                              name={comment.name}
                                              email={comment.email}
                                              body={comment.body}/>)}
        </div>
    );
}

export default Comments;