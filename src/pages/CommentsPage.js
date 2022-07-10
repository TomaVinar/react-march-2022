import React from "react";
import {Outlet} from "react-router";

import Comments from "../components/comments/Comments";

function CommentsPage() {
    return (
        <div>
            <Comments/>
            <hr/>
                <Outlet/>
            <hr/>
        </div>
    );
}

export default CommentsPage;