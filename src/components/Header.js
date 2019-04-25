import React, { Component } from 'react';
import '../styles.css/header.css';
import { Button } from 'reactstrap';



class Header extends Component {
  render() {
      return(
      <header>
        <h1>Match Up</h1>
        <h2>Hitta träningsmatcher snabbt och enkelt</h2>
      </header>
         

      );

  }
}

export default Header;