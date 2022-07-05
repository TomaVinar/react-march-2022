import React from "react";

function User(user) {

    const {id, name, username, email, phone} = user;

    return (
        <div>
            {id}
            <h2>{name}</h2>
            <h4>{username}</h4>
            <div>{email} - {phone}</div>
        </div>
    );
}

export default User;