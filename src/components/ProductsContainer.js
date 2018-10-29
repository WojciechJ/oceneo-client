import React, { Component } from 'react'
import axios from 'axios'

class ProductsContainer extends Component {

  constructor(props) {
  super(props)
  this.state = {
    products: []
  }
}

  componentDidMount() {
   axios.get('https://oceneo-api.herokuapp.com/api/products')
   .then(response => {
     console.log("Response:",response)
     this.setState({products: response.data})
   })
   .catch(error => console.log(error))
 }

  render() {

    return (
      <div>

        {this.state.products.map((product) =>  {
            return(
              <div className="tile" key={product.id} >
                <h4>{product.name}</h4>
                <p>{product.description}</p>
              </div>
            )
          })}
      </div>
    )
  }
}

export default ProductsContainer
