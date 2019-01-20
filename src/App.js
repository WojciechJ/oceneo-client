import React, { Component } from 'react';

import Home from './components/Home';
import ProductPage from './components/ProductPage';
import AddReview from './components/AddReview';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import Recover from './components/Recover';

import {
	BrowserRouter as Router,
	Route,
	withRouter
} from 'react-router-dom';

const ProductPageWithRouter = withRouter(ProductPage);

class App extends Component {
  render() {
    return (
	<Router>
      <div className="container">
	  <Route exact path="/" component={Home}/>
	  <Route path="/product/:product_id" component={ProductPage}/>
	  <Route path="/addreview/:product_id" component={AddReview}/>
	  <Route path="/login" component={Login}/>
	  <Route path="/register" component={Register}/>
	  <Route path="/account/:user_id" component={Account}/>
	  <Route path="/recover" component={Recover}/>
      </div>
	</Router>
    );
  }
}

export default App;


