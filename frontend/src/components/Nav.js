import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
<<<<<<< HEAD
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
=======
  render() {
    return (
      <div className="navbar-container">
        <Link to="/" className="home-button">
          Home
        </Link>
        <Link to="/about" className="home-button">
          About
        </Link>
        <a href="https://drive.google.com/file/d/1gxvtYJCwGt3SWpf6SZd5K1iFc2CqnPyS/view?usp=sharing" className="home-button">
          Resume
        </a>
        <Link to="/contact" className="home-button">
          Contact
        </Link>
      </div>
    );
  }
>>>>>>> 3e6c4f3d8ab0856eabf60390d7024276d807dee6
}

export default Nav;
