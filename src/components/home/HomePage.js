import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      profile: null,
      error: ""
    };
  }
  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.props.auth.getProfile((profile, error) => {
      this.setState({ profile, error });
    });
  }
  render() {
    const { isAuthenticated, login } = this.props.auth;
    const { profile } = this.state;
    let displayName;
    let welcomeText;
    if (profile) {
      displayName = profile.given_name || profile.nickname;
      welcomeText = profile ? `Welcome, ${displayName}!` : "Welcome!";
    }
    return (
      <div>
        <h1>Home Page</h1>
        {isAuthenticated() ? (
          <>
            <p>{welcomeText}</p>

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
