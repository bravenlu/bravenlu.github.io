import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true,
        }
    }
    toggleNav = () => {
        this.setState({
            hidden: false,
        })
    }
    closeNav = () => {
        this.setState({
            hidden: true,
        })
    }

    render() {
        const { hidden } = this.state;
        return (
            <React.Fragment>
                {!hidden && (
                    <div className="navbar-container">
                        <div className="home-button">Home</div>
                        <div className="contact-button">Contact</div>
                        <div onClick={this.closeNav} className="home-button">Close</div>
                    </div>
                )}

                {hidden && (
                    <div onClick={this.toggleNav} className="slider">
                        >
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default Nav;