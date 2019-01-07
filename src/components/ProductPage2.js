import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/custom.css';
import '../css/fontello_icons-embedded.css';
import '../css/baguetteBox.min.css';
import $ from 'jquery';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import ReviewSection from '../components/ReviewSection2';
import Footer from '../components/Footer';
class ProductPage extends Component {
  render() {
    return (
	
      <div className="container">
        <Header />
		<div className="container products_page">
			<InfoSection />
			<ReviewSection />
		</div>
		<Footer />
      </div>
	
    );
  }
}

export default ProductPage;
