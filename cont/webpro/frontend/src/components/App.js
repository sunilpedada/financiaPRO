import React,{Component,Fragment} from "react";
import RegisterLogin from "./SingupAndSingin/Login"
import View from "./View/view"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      auth:true,
    }
  }

  render() {
    console.log("jj",this.props);
    return (
        <Router basename="/momo">
            <Fragment>
            <Switch>
                <Route exact path='/' component={RegisterLogin}/>
                {this.state.auth?<Route exact path='/view' component={View}/>:null}
                <Route render={()=>(<h1>Not Found</h1>)}/>
            </Switch>
            </Fragment>
            </Router>
      
    );
  }
};
