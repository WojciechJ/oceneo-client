import React, { Component } from 'react';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import AddReview from './components/AddReview';
import ProductPage1 from './components/ProductPage1';
import ProductPage2 from './components/ProductPage2';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
	<Router>
      <div className="container">
	  <Route exact path="/" component={Home}></Route>
	  <Route path="/product/:id" component={ProductPage}></Route>
	  <Route path="/product1" component={ProductPage1}></Route>
	  <Route path="/product2" component={ProductPage2}></Route>
	  <Route path="/addreview" component={AddReview}></Route>
      </div>
	</Router>
    );
  }
}

export default App;
