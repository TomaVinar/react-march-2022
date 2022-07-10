import React from 'react';

function Todo({id, title, completed}) {
    //
    // const {id, title, completed} = todo;
    //
    return (
        <div>
            {id}
            <h3>{title}</h3>
            <p>{completed}</p>
        </div>
    );
}

export default Todo;