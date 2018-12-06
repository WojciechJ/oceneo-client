import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ProductsContainer from './components/ProductsContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="container">
            <h2>Oceneo - oceń produkty</h2>
        </header>
        <ProductsContainer />
      </div>
    );
  }
}

export default App;
