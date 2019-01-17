import React from "react";
import './homepage.css';
import Nav from '../../components/Nav';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
     <div className="app-container">
        <Nav />
        <div className="top">
            <div className="sideA">
                <Link to="/contact" className="contactbutton">
                    Contact
                </Link>
            </div>
            <div className="sideB">
                lol
            </div>
        </div>

        <div className="bottom">
           
        </div>
     </div>
    )
  }
}

export default HomePage;


