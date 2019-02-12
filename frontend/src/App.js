import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import { HashRouter, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
