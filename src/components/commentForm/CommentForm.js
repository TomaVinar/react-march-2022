import React, {useState} from "react";
import {useForm} from "react-hook-form";

import {createComment} from "../../service/comment.service";
import SingleComment from "../singleComment/SingleComment";

function CommentForm() {

    const [comment, setComment] = useState({});

    const {register, reset, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            name: 'name',
            email: 'email',
            body: 'text'
        }
    });

    const submit = (comment) => {
        createComment(comment).then(response => setComment(response))
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Username: </label><input type="text" {...register('name', {required: true, minLength: 3})}/>
                <span>{errors.name && errors.name.message}</span>
                <label>Email: </label><input type="email" {...register('email', {required: true, minLength: 3})}/>
                <span>{errors.email && errors.email.message}</span>
                <label>Text: </label><input type="text" {...register('body', {required: true, minLength: 3})}/>
                <button disabled={!isValid}>Add comment</button>
                <span>{errors.body && errors.body.message}</span>
            </form>
            <SingleComment key={comment.id}
                           body={comment.body}
                           name={comment.name}
                           email={comment.email}/>
        </div>
    );
}

export default CommentForm;