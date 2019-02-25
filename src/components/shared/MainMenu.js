import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    return (
        <div className="container" id="navbarSupportedContent">
            <div className="row">
                <div className="col-xs-4">
                    <Link to="/" className="nav-link">Home Page</Link>
                </div>
                <div className="col-xs-4">
                    <Link to="/goals" className="nav-link">Goals</Link>
                </div>
                <div className="col-xs-4">
                    <Link to="/track" className="nav-link">Track</Link>
                </div>
                <div className="col-xs-4">
                    <Link to="/about" className="nav-link">About Page</Link>
                </div>
            </div>
        </div>
    );

}

export default MainMenu;