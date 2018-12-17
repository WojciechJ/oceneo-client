import React, { Component } from 'react';
import './css/bootstrap.css';
import ProductsContainer from './components/ProductsContainer'
import Header from './components/Header';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
		<ProductsContainer />
		<Footer />
      </div>
    );
  }
}

export default App;
