import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Header from './Header'
import Intro from './Intro'
import Register from './Register'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
    <Router>
      <div>
       <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Header" component={Header} />
          <Route path="/Intro" component={Intro} />
          <Route path="/Register" component={Register} />
        </Switch>
       
      </div>
    </Router>
    );

};

}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App; 