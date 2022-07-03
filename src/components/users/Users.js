import React, {useEffect, useState} from "react";
import {getPosts, getUsers} from "../../services/user.service";
import User from "../user/User";
import Post from "../post/Post";


function Users() {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, []);

    const getCurrentUser = (id) => {
        getPosts(id).then(value => setPosts(value.data))
    }

    return (
        <div>
            <div>

                {posts.map(post => <Post key={post.id}
                                         userId={post.userId}
                                         title={post.title}
                                         body={post.body}
                />)}
            </div>
            {users.map(user => <User key={user.id}
                                     id={user.id}
                                     name={user.name}
                                     username={user.username}
                                     email={user.email}
                                     getCurrentUser={getCurrentUser}

            />)}
        </div>
    );
}

export default Users;
