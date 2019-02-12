import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Nav />
        <div className="contact-body">braven@vt.edu</div>
      </div>
    );
  }
}
