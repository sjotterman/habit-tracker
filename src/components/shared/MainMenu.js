import React from "react";
import { Link } from "react-router-dom";

const MainMenu = props => {
  const { isAuthenticated, login, logout } = props.auth;
  return (
    <div className="container" id="navbarSupportedContent">
      <div className="navbar-row">
        <div className="navbar-item">
          <Link to="/" className="">
            <button className="btn btn-primary btn-sm">Home</button>
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/goals" className="">
            <button className="btn btn-primary btn-sm">Goals</button>
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/manageGoals" className="">
            <button className="btn btn-primary btn-sm">Manage</button>
          </Link>
        </div>
        <div className="navbar-item">
          <Link to="/about" className="">
            <button className="btn btn-primary btn-sm">About</button>
          </Link>
        </div>
        {isAuthenticated() ? (
          <>
            <div className="navbar-item">
              <Link to="/profile" className="">
                <button className="btn btn-primary btn-sm">Profile</button>
              </Link>
            </div>
            <div className="navbar-item">
              <button className="btn btn-success btn-sm" onClick={logout}>
                Log Out
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="navbar-item">
              <button className="btn btn-success btn-sm" onClick={login}>
                Log In
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainMenu;
