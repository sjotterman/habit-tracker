import React from 'react';
import { Link } from 'react-router-dom';


class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
            <h1>HomePage</h1>
            <p>Placeholder for homepage</p>
            <Link to="/about" className="btn btn-primary btn-lg">About Page</Link>
            </div>
        )
    }
}

export default HomePage;