import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import NavBar from './component/Style/NavBar';
import Footer from './component/Style/Footer';
import SignUp from "./component/Forms/SignUp";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/SignUp" render={() => <SignUp />} />
        </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
