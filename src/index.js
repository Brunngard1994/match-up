import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import Teams from './Teams';
import Contact from './Contact';
import Notfound from './Notfound'


const routing = (
    <Router>
        <div>
            <ul>
                <li>
                <Link to="/">Teams</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
             </ul>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/Teams" component={Teams} />
            <Route path="/Contact" component={Contact} />
            <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));



