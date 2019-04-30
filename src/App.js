import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Intro from './components/Intro'
import Guide from './components/Guide'
import Appstore from './components/Appstore'
import Footer from './components/Footer'
import Registration from './components/Registration'


class App extends Component {
  render() {
    return (
    <div>
      <Navbar />
      <Header />
      <Intro />
      <Guide />
      <Appstore />
      <Footer />
      
     </div>
    );
      
    
  

};

}

export default App; 