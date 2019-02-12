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
                <div className="home-body">
                    Welcome!
                </div>
            </div>
        )
    }
}

export default HomePage;


