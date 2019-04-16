import React from "react";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
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
    const { profile } = this.state;
    if (!profile) return null;
    console.log(this.state);
    const displayName = profile.given_name || profile.nickname;
    return (
      <div>
        <h1>Profile Page</h1>
        <p>{displayName}</p>
        <img
          style={{ maxWidth: 50, maxHeight: 50 }}
          src={profile.picture}
          alt="profile pic"
        />
      </div>
    );
  }
}

export default ProfilePage;
