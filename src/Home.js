import React, { Component } from 'react';
import fire from './config/Fire';
import { Link } from 'react-router-dom';
import './styles.css/home.css'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';



class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
        <div className="grid-wrapper">
            <div className="welcome">
                <h1>Välkommen till Match Up!</h1>
                 <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                     Hitta Lediga lag
                 </Button>
                 <UncontrolledCollapse toggler="#toggler">
                  <Card>
                   <CardBody>
                    Det finns för tillfället inga lediga lag att möta.
                    </CardBody>
                   </Card>
                 </UncontrolledCollapse>
                 <Link id="link-button" to="/Header">
                  <button id="logout-button" onClick={this.logout}>Logout</button>
                 </Link>
            </div>
        </div>
        );


    }

}

export default Home;