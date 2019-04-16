import React from "react";
import { Link } from "react-router-dom";

const MainMenu = props => {
  const { isAuthenticated, login, logout } = props.auth;
  return (
    <div className="container" id="navbarSupportedContent">
      <div className="row">
        <div className="col-xs-2">
          <Link to="/" className="nav-link">
            <span className="badge badge-primary">Home Page</span>
          </Link>
        </div>
        <div className="col-xs-2">
          <Link to="/goals" className="nav-link">
            <span className="badge badge-primary">Goals</span>
          </Link>
        </div>
        <div className="col-xs-2">
          <Link to="/manageGoals" className="nav-link">
            <span className="badge badge-primary">Manage Goals</span>
          </Link>
        </div>
        <div className="col-xs-2">
          <Link to="/about" className="nav-link">
            <span className="badge badge-primary">About</span>
          </Link>
        </div>
        {isAuthenticated() ? (
          <>
            <div className="col-xs-2">
              <Link to="/profile" className="nav-link">
                <span className="badge badge-primary">Profile</span>
              </Link>
            </div>
            <div className="col-xs-2">
              <button className="btn btn-success btn-sm" onClick={logout}>
                Log Out
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
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
