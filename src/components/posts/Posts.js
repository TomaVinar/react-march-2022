import React, {Component} from "react";

import {postApiService} from "../../service/post.service";
import Post from "../post/Post";
import "./Posts.css";

class Posts extends Component {

    state = {posts: []}

    constructor(props) {
        super(props);

        this.postsApiService = new postApiService();
        this.postsApiService.getPosts().then(value => this.setState({posts: value}))

    }

    render() {
        return (
            <div className={'posts_container'}>
                {this.state.posts.map(value => <Post key={value.id}
                                                     post={value}/>)}
            </div>
        );
    }
}

export default Posts;