import React, {useEffect, useState} from "react";
import {useParams} from "react-router";

import Post from "../components/post/Post";

function PostPage() {

    const {postId} = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(value => value.json())
            .then(post => setPost(post))
    }, [postId]);

    return (
        <div>
            {post && <Post key={post.id}
                           title={post.title}
                           body={post.body}/>}
        </div>
    )
}

export default PostPage;