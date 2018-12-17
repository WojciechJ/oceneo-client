import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/custom.css';
import '../css/fontello_icons-embedded.css';
import Header from '../components/Header';
import ProductsContainer from '../components/ProductsContainer';
import Footer from '../components/Footer';
class Home extends Component {
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

export default Home;
