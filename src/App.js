import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ProductsContainer from './components/ProductsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Oceneo - oceń produkty
        </header>
        <ProductsContainer />
      </div>
    );
  }
}

export default App;
