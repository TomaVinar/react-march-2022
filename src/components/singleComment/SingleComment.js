import React from "react";

function SingleComment(comment) {

    const {id, name, body, email} = comment;

    return (
        <div className={'main_block'}>
            {id}
            <h6>{email}</h6>
            <h3>{name}</h3>
            <p>{body}</p>
        </div>
    );
}

export default SingleComment;