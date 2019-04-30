import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles.css/intro.css'


class Intro extends Component {
  render() {
      return(
        <div className="about">
            <h2><span>Vad är Match Up?</span></h2>
            <p>Match Up är en tjänst som ska göra det lättare för din klubb att hitta träningsmatcher. Vi är just nu i tidig produktion men tjänsten  utvecklas ständigt</p>
        </div>
       
      );

  }
}

export default Intro;