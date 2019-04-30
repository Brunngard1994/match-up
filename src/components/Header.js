import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../styles.css/header.css';

class Header extends Component {
  render() {
      return(
      <section className="text-center">
        <h1>Match Up</h1>
        <h2>Hitta träningsmatcher snabbt och enkelt</h2>
        <Button className="reg-button"  outline color="secondary" size="lg">Register</Button>
      </section>
         

      );

  }
}

export default Header;