import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="contact-container">
                <Link to="/">
                    home
                </Link>

                <a href="https://christianterence.me">
                    christian
                </a>
            </div>
        )
    }
}