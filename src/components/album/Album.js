import React from "react";

function Album({id, title}) {

    return (
        <div>
            {id}
            <h2>{title}</h2>
        </div>
    );
}

export default Album;