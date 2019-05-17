import React from 'react';
import '../styles.css/nav.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
  import { Link } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar-color" light expand="md">
          <NavbarBrand className="navbar-text" tag={Link} to="/Header" >Match Up</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav id="nav-drop" className="ml-auto" navbar>
              <NavItem>
                <NavLink id="nav-link" tag={Link} to="/Header">Hem</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="nav-link" tag={Link} to="/Intro">Kontakta Oss</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="nav-link" tag={Link} to="/Register"><span>Signup/Login</span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}