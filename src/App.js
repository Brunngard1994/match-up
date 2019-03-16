import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import Errors from "./components/Teams";
import Navigation from "./components/Navigation";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/Teams" component={Teams} />
              <Route path="/Contact" component={Contact} />
              <Route component={Errors} />
            </Switch>
        </div>
      </BrowserRouter>
     );
  }

};



export default App; 