import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Footer from './components/Footer'
import Registration from './components/Registration'


class App extends Component {
  render() {
    return (
    <div>
      <Navbar />
      <Header />
      <Intro />
      <Registration />
      <Footer />
      
     </div>
    );
      
    
  

};

}

export default App; 