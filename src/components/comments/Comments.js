import React, {Component} from "react";

import {commentApiService} from "../../service/comment.service";
import Comment from "../comment/Comment";
import "./Comments.css";

class Comments extends Component {

    state = {comments: []};

    constructor(props) {
        super(props);

        this.commentApiService = new commentApiService();
        this.commentApiService.getComments().then(value => this.setState({comments: value}));
    }

    render() {
        return (
            <div className={'comments_container'}>
                {this.state.comments.map(value => <Comment key={value.id}
                                                           comment={value}
                />)}
            </div>
        );
    }
}

export default Comments;