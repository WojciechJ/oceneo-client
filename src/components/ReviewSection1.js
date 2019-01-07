import React, { Component } from 'react'
import axios from 'axios'

class ReviewSection extends Component {

  constructor(props) {
  super(props);
  this.state = {products:[]};
  const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
}


  componentDidMount() {

  //http://oceneo-api.herokuapp.com/api/products.json
  //https://jsonplaceholder.typicode.com/users
  
   axios.get('http://oceneo-api.herokuapp.com/api/products/1/rates.json')
   .then(res => {
     console.log(res)
	 const products = res.data;
     this.setState({products})
   })
   .catch(error => console.log(error))
 }

 
 
 
  render(){
		return(
		
			<div className="container products">
				{this.state.products.map(product => 
				
				<div className="row" key={product.id}>
					<div className="col-sm-2">
						<img src="https://dummyimage.com/70x70/9d9da3/050505" className="img-rounded" />
						<div className="review-block-name">{product.user_id}</div>
						<div className="review-block-date">{(new Date()).toLocaleDateString('en-US', product.created_at)}<br />15:30</div>
					</div>
					
				<div className="col-sm-10">
				
				
                  <div className="review-block-rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star-empty" />
                    <i className="icon-star-empty" />
                  </div>
				  <div className="review-block-description">{product.comment}</div>
                  <hr />
				  
				  
				  <div className="row">
                    <div className="col-sm-6">
                      <h6>Zalety:</h6>
                    </div>
                    <div className="col-sm-6">
                      <h6>Wady:</h6>
                    </div>
				  </div>
				  
				  
				  <div className="review-block-cons-pros row">
                    <div className="col-sm-6 review-block-pros">
                      <p>placeholder</p>
                    </div>
                    <div className="col-sm-6 review-block-cons">
                      <p>placeholder</p>
                    </div>
                  </div>

				  
{/*col-sm-10*/}</div> 

{/*row*/}</div> 

)}

{/*container products*/}</div>   

)
}
}





export default ReviewSection
