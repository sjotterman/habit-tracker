import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home Page</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/track" className="nav-link">Track</Link>
                </li>
                <li className="nav-item active">
                    <Link to="/about" className="nav-link">About Page</Link>
                </li>
            </ul>
        </div>
    </nav>
    );

}

export default MainMenu;