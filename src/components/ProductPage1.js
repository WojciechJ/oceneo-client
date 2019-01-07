import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/custom.css';
import '../css/fontello_icons-embedded.css';
import '../css/baguetteBox.min.css';
import $ from 'jquery';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';
import ReviewSection from '../components/ReviewSection1';
import Footer from '../components/Footer';
import {
	BrowserRouter as Router,
	Route,
	Link,
	withRouter
} from 'react-router-dom';


class ProductPage extends Component {
  
  constuctor() {
  this.routeChange = this.routeChange.bind(this);
   }
   routeChange(){
    let path = `/addreview`;
    this.props.history.push(path);
    }


  render() {
    return (
	
      <div className="container">
        <Header />
		<div className="container products_page">
			<InfoSection />
			<ReviewSection />
		</div>
		<div className="container">
            <Link to="/addreview"><input type="button" defaultValue="Dodaj opinię" className="add btn btn-outline-primary"/></Link>
        </div>
		<Footer />
      </div>
	
    );
  }
}

	
export default ProductPage;
