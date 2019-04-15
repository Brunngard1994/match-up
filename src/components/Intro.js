import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles.css/intro.css'


class Intro extends Component {
  render() {
      return(
        <div className="about">
            <h2>Om oss</h2>
            <p>Vi gör det enklare för ditt lag att hitta träningsmatcher</p>
            <Container>
              <Row>
                <Col xs="3"></Col>
                <Col xs="auto"></Col>
                <Col xs="3"></Col>
              </Row>
            </Container>
        </div>
       
      );

  }
}

export default Intro;