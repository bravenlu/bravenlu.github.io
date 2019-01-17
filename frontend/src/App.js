import React from "react";
import './App.css';
import HomePage from './pages/homepage/homepage';
import Contact from './pages/contact/contact';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Route path="/" exact component={HomePage} />
                <Route path="/contact" exact component={Contact} />
            </React.Fragment>
        </BrowserRouter>
    )
  }
}

export default App;


