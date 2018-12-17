import React, { Component } from 'react';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import {
	BrowserRouter as Router,
	Route,
	Link	
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
	<Router>
      <div className="container">
	  <Route exact path="/home" component={Home} />
	  <Route path="/product" component={ProductPage} />
      </div>
	</Router>
    );
  }
}

export default App;
