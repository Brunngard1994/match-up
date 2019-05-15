import React, { Component } from 'react';
import fire from './config/Fire';
import Navbar from './components/Navbar'
import Header from './Header'
import Intro from './Intro'
import Login from './Login'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends Component {

  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
    <Router>
      <div>
       <Navbar />
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/Header" component={Header} />
          <Route path="/Intro" component={Intro} />
          {this.state.user ? (<Home />) : (<Login />)}
        </Switch>
       </div>
    </Router>
    );

};

}



export default App; 