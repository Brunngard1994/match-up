import React, { Component } from 'react';
import '../styles.css/header.css';
import { Button } from 'reactstrap';



class Header extends Component {
  render() {
      return(
      <header>
        <nav>
          <ul>
          <li><a href="default.asp">Om oss</a></li>
          <li><a href="default.asp">Kontakta oss</a></li>
          <li><a href="default.asp">Registrering</a></li>
          </ul>
        </nav>
        <h1><span>Match Up</span></h1>
        <h2><span>Hitta träningsmatcher snabbt och enkelt</span></h2>
        <Button className="login">Log In</Button>
      </header>
         

      );

  }
}

export default Header;