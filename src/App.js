import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './header.js';
import {Footer} from './footer.js';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import { Login } from './components/login.js';
import { Register } from './components/userform.js';


class App extends Component {
  render() {
    return (
      <div className="">
        <Header title="My App"/>
        <Router>
          <Link to="/Login" className="App-link">Login</Link>
          <Link to="/NewUser" className="App-link">New User</Link>
          <Switch>
            <Route path="/" component={Login} exact></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/NewUser" component={Register}></Route>
          </Switch>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
