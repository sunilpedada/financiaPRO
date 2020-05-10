import React,{Component} from "react";
import RegisterLogin from "./Login";
import page1 from "./page2";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

export default class App extends React.Component {

  render() {
    return (
        <Router>
            <Switch>
                <Route exact path='/momo' component={RegisterLogin}/>
            </Switch>
            </Router>
      
    );
  }
};
