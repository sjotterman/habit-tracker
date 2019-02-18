import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link to="/" className="nav-link">Home Page</Link>
            </li>
            <li class="nav-item active">
                <Link to="/about" className="nav-link">About Page</Link>
            </li>
            </ul>
        </div>
    </nav>
    );

}

export default MainMenu;