import React from "react";
import "./about.css";
import Nav from "../../components/Nav";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-container">
        <div className="about-body">
          <div className="about-title">About Me:</div>
          <div className="about-desc">
            Hi, My name is Braven Lu. I am currently a junior at Virginia Tech.
            I am also currently a team manager for a company called CDR
            Communications. I have also had other forms of leadership roles and
            have worked in many teams to work on soft skills such as
            communication and teamwork. I am proficient at Java and C and have
            also delved into Javascript, HTML, and CSS.
          </div>
          <Nav />
        </div>
        <div className="picture" />
      </div>
    );
  }
}

export default About;
