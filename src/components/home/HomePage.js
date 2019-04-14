import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <div>
        <h1>Home Page</h1>
        {isAuthenticated() ? (
          <>
            <p>Welcome!</p>
            <Link to="/goals" className="nav-link">
              <button className="btn btn-primary">See my goals</button>
            </Link>
          </>
        ) : (
          <>
            <p>Please login to see your goals</p>
            <button className="btn btn-primary" onClick={login}>
              Log In
            </button>
          </>
        )}
      </div>
    );
  }
}

export default HomePage;
