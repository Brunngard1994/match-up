import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles.css/intro.css'


class Intro extends Component {
  render() {
      return(
        <div className="about">
            <h2><span>Vi gör det enklare för ditt lag att hitta träningsmatcher!</span></h2>
             <Container className="steps">
              <Row>
                <Col>
                  <h2><span>Steg 1</span></h2>
                  <p>Registrera dig på hemsidan</p>
                </Col>
                <Col>
                  <h2>Steg2</h2>
                  <p>Leta efter lediga motståndare</p>
                </Col>
                <Col>
                  <h2>Steg 3</h2>
                  <p>Leta efter lediga motståndare</p>
                </Col>
                <Col>
                  <h2>Steg 4</h2>
                  <p>Leta efter lediga motståndare</p>
                </Col>
              </Row>

            </Container>
        </div>
       
      );

  }
}

export default Intro;