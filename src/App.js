import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Header from './Header'
import Intro from './Intro'
import Register from './Register'
import Guide from './components/Guide'
import Social from './Social'
import Footer from './components/Footer'
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
       <Footer />
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