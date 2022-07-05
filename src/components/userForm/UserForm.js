import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {createUser} from "../../service/user.service";
import User from "../user/User";

function UserForm() {

    const [user, serUser] = useState({});

    const {register, reset, handleSubmit, formState: { errors }} = useForm();

    const submit = (newUser) => {
        createUser(newUser).then(value => serUser(value));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Name: </label><input type="text" {...register('name', {required: true, minLength: 3})}/>
                <span>{errors.name && errors.name.message}</span>
                <label>Username: </label><input type="text" {...register('username', {required: true, minLength: 3})}/>
                <span>{errors.username && errors.username.message}</span>
                <label>Email: </label><input type="email" {...register('email', {required: true, minLength: 3})}/>
                <span>{errors.email && errors.email.message}</span>
                <label>Phone: </label><input type="text" {...register('phone', {required: true, minLength: 3})}/>
                <span>{errors.phone && errors.phone.message}</span>
                <button>Add user</button>
            </form>
            <div>
                {user && <User key={user.id}
                               name={user.name}
                               username={user.username}
                               email={user.email}
                               phone={user.phone}/>}
            </div>
        </div>
    );
}

export default UserForm;