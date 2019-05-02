import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Intro from './components/Intro'
import Guide from './components/Guide'
import Social from './components/Social'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
    <div>
      <Navbar />
      <Header />
      <Intro />
      <Guide />
      <Social/>
      <Footer />
      
     </div>
    );
      
    
  

};

}

export default App; 