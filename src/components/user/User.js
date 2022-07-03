import React from "react";

function User({id, email, name, username, getCurrentUser}) {

    return (
        <div>
            {id}
            <h3>{name}</h3>
            <h6>{username}</h6>
            <p>{email}</p>
            <button onClick={() => {getCurrentUser(id)}}>Show all user's posts</button>
        </div>
    );
}

export default User;