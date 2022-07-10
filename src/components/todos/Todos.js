import React, {useEffect, useState} from "react";

import Todo from "../todo/Todo";

function Todos() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(todos => setTodos(todos))

    }, []);

    return (
        <div>
            {todos.map(todo => <Todo key={todo.id}
                                     id={todo.id}
                                     title={todo.title}/>)}
        </div>
    );
}

export default Todos;