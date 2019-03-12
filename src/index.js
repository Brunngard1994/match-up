import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Teams from './Teams';
import Contact from './Contact';


const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                    <Link to="/">Teams</Link>
                <li>
                    <Link to="/">Contact</Link>
                </li>
             </ul>
            <Route exact path="/" component={App} />
            <Route path="/Teams" component={Teams} />
            <Route path="/Contact" component={Contact} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));



