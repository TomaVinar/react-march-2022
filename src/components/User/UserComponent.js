import React from 'react';

import './UserComponent.css';

const UserComponent = ({user, getUser}) => {

    const {id, name, username, website, email, phone} = user;

    return (
        <div>
            {id}
            <h3>{name}</h3>
            <button onClick={() => {getUser(user)}}>Get details</button>
        </div>
    );
};

export default UserComponent;