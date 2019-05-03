import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../styles.css/header.css';
import { Route } from "react-router-dom"
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
      return(
      <section className="text-center">
        <h1>Match Up</h1>
        <h2>Hitta träningsmatcher snabbt och enkelt</h2>
        <ul>
          <li>
          <Link to='/Registration' > some stuff </Link>
          </li>
        </ul>
      </section>
      
    );

  }
}

export default Header;