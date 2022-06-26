import React, {useEffect, useState} from 'react'

import UserComponent from '../User/UserComponent';

const UsersComponent = () => {

    const [users, setUsers] = useState([]);
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response => setUsers(response));
    }, [])

    const getUser = (item) => {
        setItem(item);
    }

    return (
        <div>
            <div>
                {item.id &&
                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.username}</p>
                        <p>{item.email}</p>
                        <div>{item.website}</div>
                        <p>{item.phone}</p>
                    </div>}
            </div>
            {users.map((user, index) => <UserComponent key={user.id}
                                                       user={user}
                                                       getUser={getUser}/>
            )}
        </div>
    );
};

export default UsersComponent;