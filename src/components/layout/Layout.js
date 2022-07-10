import React from "react";
import {Link} from "react-router-dom";

import "./Layout.css"

function Layout() {

    return (
        <div className={'top_nav'}>
            <div><Link to={'/'}>Home</Link></div>
            <div><Link to={'/todos'}>Todos</Link></div>
            <div><Link to={'/albums'}>Albums</Link></div>
            <div><Link to={'/comments'}>Comments</Link></div>
        </div>
    );
}

export default Layout;