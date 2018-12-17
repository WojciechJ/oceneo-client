import React, { Component } from 'react'
import axios from 'axios'


class ProductsContainer extends Component {

  constructor(props) {
  super(props);
  this.state = {products:[]};
}


  componentDidMount() {

  //http://oceneo-api.herokuapp.com/api/products.json
  
   axios.get('https://jsonplaceholder.typicode.com/users')
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
					<div className="card container" key={product.id} >
						<div className="box">
							<div className="img container">
								<img src={product.image} alt={product.description}/>
							</div>
							<h2>{product.name}</h2>
							<span>{product.description}</span>
							  <div className="display-rating">
								<i className="icon-star"></i>
								<i className="icon-star"></i>
								<i className="icon-star"></i>
								<i className="icon-star-empty"></i>
								<i className="icon-star-empty"></i>
								<a href="#">(Opinie - 3)</a>
							  </div>
						</div>
					</div>
					)}
				</div>
				
          
		 )
		}
}


export default ProductsContainer