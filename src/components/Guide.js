import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles.css/guide.css'



class Guide extends Component {
  render() {
      return(
        <div className="guide">
          <div>
            <h1>steg 1</h1>
              <p>Registrera dig och logga in på hemsidan</p>
          </div>  
          <div>
            <h1>steg 2</h1>
              <p>Leta efter lediga motståndare</p>
          </div>
          <div>
            <h1>steg 3</h1>
              <p>Skicka förfrågan om träningsmatch</p>
          </div>
        </div>
       
      );

  }
}

export default Guide;