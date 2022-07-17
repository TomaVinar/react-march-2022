import React, {Component} from "react";

import "./Comment.css";

class Comment extends Component {

    render() {
        return (
            <div className={'comment_container'}>
                {this.props.comment.id}
                <h3 className={'comment_name'}>{this.props.comment.name}</h3>
                <p>{this.props.comment.username}</p>
                <p>{this.props.comment.email}</p>
            </div>
        );
    }
}

export default Comment;