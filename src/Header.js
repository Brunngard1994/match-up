import React from 'react';
import './styles.css/header.css';
import './styles.css/intro.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"



function Header() {

  return(
    <Container fluid>
      <Row className="home-page">
        <Col>
          <h1>MATCH UP</h1>
          <h2>Hitta träningsmatcher snabbt och enkelt</h2>
          <Link id="link-button" to="/Register">
          <button id="f-button">Register</button>
          </Link>
          
        </Col>
      </Row>
      <Row className="section-1">
          <Col className="section-2" xs="6"> <img src="./images/svff.png" alt="" /></Col>
          <Col xs="6"><h1>MATCH UP</h1></Col>
      </Row>
      <Row className="about">
        <Col>
          <h2><span>Vad är Match Up?</span></h2>
          <p>Match Up är en tjänst som ska göra det lättare för din klubb att hitta träningsmatcher. Vi är just nu i tidig produktion men tjänsten  utvecklas ständigt</p>
        </Col>
      </Row>
      <Row className="about">
        <Col>
          <h2>Hur funkar det?</h2>
        </Col>
      </Row>
      <Row className="guide">
          <Col xs="12" sm="4"> 
            <h1>steg 1</h1>
            <p>Registrera dig och logga in på hemsidan</p>
          </Col>
          <Col xs="12" sm="4">
            <h1>steg 2</h1>
            <p>Leta efter lediga motståndare</p>
          </Col>
          <Col sm="4">
            <h1>steg 3</h1>
            <p>Skicka förfrågan om träninsgmatch</p>
          </Col>
      </Row>
      <Row className="social-media">
        <Col>
          <h1>Håll dig <span>uppdaterad</span> med de senaste nyheterna</h1>
           <a href="https://www.linkedin.com/in/emil-brunngård-34b765146/">
            <FontAwesomeIcon icon={faLinkedin} />
           </a>
           <a href="https://www.linkedin.com/in/emil-brunngård-34b765146/">
            <FontAwesomeIcon icon={faFacebook} />
           </a>
        </Col>
      </Row>
    </Container>
    
   );
}

export default Header;