import React from 'react';
import {  Link } from 'react-router-dom';


class AboutPage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
            <h1>AboutPage</h1>
            <p>Placeholder for about page</p>
            <Link to="/" className="btn btn-primary btn-lg">Home Page</Link>
            </div>
        )
    }
}

export default AboutPage;