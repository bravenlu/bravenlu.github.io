import React from "react";
import "./homepage.css";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";

const title = ["|Developer|", "|Solver|", "|Designer|" ];

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

<<<<<<< HEAD

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
=======
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
>>>>>>> 3e6c4f3d8ab0856eabf60390d7024276d807dee6
}

export default HomePage;
