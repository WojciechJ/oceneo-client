import React, { Component } from 'react'
import axios from 'axios'
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Route,
	withRouter,
	Link
} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

class ReviewSection extends Component {

  constructor(props) {
  super(props);
  this.state = {
  rates:[],
  rating: 1,
  rating_custom_icon: 1
  
  };

}


  componentDidMount() {
	const {
      match: {
        params: { product_id }
      }
    } = this.props;

   axios.get(`https://oceneo-api.herokuapp.com/api/products/${product_id}/rates`)
   .then(res => {
     console.log(res)
	 const rates = res.data;
     this.setState({rates})
   })
   .catch(error => console.log(error))
 }

 
 
  render(){

     
		return(
		
			<div id="comments" className="container products">
				{this.state.rates.map(rate => 
				
				<div className="row" key={rate.id}>
					<div className="col-3 col-lg-2">
						<img src="https://dummyimage.com/70x70/9d9da3/050505" className="img-rounded" />
						<div className="review-block-name">{rate.user_id}</div>
						<div className="review-block-date">{(new Date()).toLocaleDateString('en-US', rate.created_at)}<br /></div>
					</div>
					
				<div className="col-9 col-lg-10">
			
				 
                  <div className="review-block-rate">
                    <StarRatingComponent
					name="rating"
					starCount={5}
					value={rate.value}
					starColor="#FA9302"
				    renderStarIcon={() => <span><h2><i className="fa fa-star" aria-hidden="true" /></h2></span>} />
                  </div>
				  <div className="review-block-description">{rate.comment}{rate.name}</div>
                  <hr />
				  
{/*col-sm-10*/}</div> 
				<hr/>
				
{/*row*/}</div> 
			
)}
				
{/*container products*/}</div>   

)
}
}





export default withRouter(ReviewSection);
