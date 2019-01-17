import React, { Component } from 'react';
import axios from 'axios';
import '../css/bootstrap.css';
import '../css/custom.css';
import '../css/fontello_icons-embedded.css';
import '../css/baguetteBox.min.css';
import HeaderSmall from '../components/HeaderSmall';
import StarRatingComponent from 'react-star-rating-component';
import $ from 'jquery';
import {
	BrowserRouter as Router,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

class AddReview extends Component {
	
	constructor() {
    super();
 
    this.state = {
      rating: 1,
	  rating_custom_icon: 1,
	  comment: '',
	  user_id: 1,
	  product: 1
    };
  }
   onStarClickCustomIcon(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({rating_custom_icon: nextValue});
  }
  

  handleCommentChange = (evt) => {
    this.setState({ comment: evt.target.value });
  }
  
  handleSubmit = (evt) => {
    const { rating, comment, user_id, product_id} = this.state;

	const rate = {
	  value: this.state.rating,
	  comment: this.state.comment,
	  user_id: this.state.user_id,
	  product_id: this.state.product_id
    };
	axios.post(`http://oceneo-api.herokuapp.com/api/products/1/rates.json`, { rate })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
	
  }
  
  
  
  
	render(){
		
		const { rating } = this.state;
		
		return(
		
		<div>
			<HeaderSmall />		
			<form onSubmit={this.handleSubmit} role="form" className="container">
			  <div className="row">
				  <h4>Dodaj nową opinię</h4>
				</div>
			  <hr />

			<StarRatingComponent
            name="rating"
            starCount={5}
            value={this.state.rating_custom_icon}
            onStarClick={this.onStarClickCustomIcon.bind(this)}
            starColor="#FA9302"
            renderStarIcon={() => <span><h2><i className="fa fa-star" aria-hidden="true" /></h2></span>} />
			
		
		<div className="form-group row">
            <textarea 
				name="comment"
				className="form-control" 
				placeholder="Twoja opinia" 
				rows={3} 
				value={this.state.comment}
				onChange={this.handleCommentChange}
				/>
          </div>
		 
		<hr />
		

          <div className="form-group row">
            <div className="center">
              <input type="submit" defaultValue="Dodaj Opinię" className="btn btn-primary" />
            </div>
          </div>
		
		</form>
		</div>
       

		
		
		);
		
		
	}
}

export default AddReview;