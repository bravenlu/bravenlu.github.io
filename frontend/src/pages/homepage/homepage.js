import React from "react";
import "./homepage.css";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";

const title = ["|Developer|", "|Solver|", "|Designer|" ];

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <div className="home-body">
          <p className="name-title">Braven Lu</p>
        </div>
        <Nav />
        <div className="home-sub">
          {title.map(val => (
            <div className="sub-title">{val}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
