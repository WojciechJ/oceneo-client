import React, { Component } from 'react'
import axios from 'axios'
import ReactDOM from "react-dom";
import { withRouter } from "react-router";


class ReviewSection extends Component {

  constructor(props) {
  super(props);
  this.state = {rates:[]};

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
					<div className="col-2">
						<img src="https://dummyimage.com/70x70/9d9da3/050505" className="img-rounded" />
						<div className="review-block-name">{rate.user_id}</div>
						<div className="review-block-date">{(new Date()).toLocaleDateString('en-US', rate.created_at)}<br /></div>
					</div>
					
				<div className="col-10">
			
				 
                  <div className="review-block-rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star-empty" />
                    <i className="icon-star-empty" />
                  </div>
				  <div className="review-block-description">{rate.comment}{rate.name}</div>
                  <hr />
			
			
				  

				  
{/*col-sm-10*/}</div> 

{/*row*/}</div> 

)}

{/*container products*/}</div>   

)
}
}





export default withRouter(ReviewSection);
