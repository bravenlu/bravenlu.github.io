import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="home-button">
                    Home
                </div>
                <div className="contact-button">
                    Contact
                </div>
                
            </div>
        )
    }
}

export default Nav;