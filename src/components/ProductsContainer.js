import React, { Component } from 'react'
import axios from 'axios'
import { Router, Route, Link } from 'react-router-dom'
import Product from './Product'



class ProductsContainer extends Component {

  constructor(props) {
  super(props)
  this.state = {
    products: [],
  }
}

  componentDidMount() {

   axios.get('http://oceneo-api.herokuapp.com/api/products.json')
   .then(response => {
     console.log(response)
     this.setState({products: response.data.products})
   })
   .catch(error => console.log(error))
 }

 addNewProduct = () => {
   axios.post(
     'http://localhost:3000/api/products.json',
     { product:
       {
         name: 'a',
         description: 'b',
         image: 'c',
       }
     }
   )
   .then(response => {
     console.log(response)
   })
   .catch(error => console.log(error))
 }

 // deleteProduct = (id) => {
 //   axios.delete(
 //     'http://localhost:3000/api/products/${this.state.product.id}.json',
 //     { product:
 //       {
 //         id:id
 //       }
 //     }
 //   )
 //   .then(response => {
 //     console.log(response)
 //   })
 //   .catch(error => console.log(error))
 // }

  render() {

    return (
      <div className="container products">

        {this.state.products.map((product) =>  {
            return(<Product product={product} key={product.id} />
            )
          })}
          <button className="newProductButton"
            onClick={this.addNewProduct} >
            Nowy produkt
          </button>
      </div>

    )
  }
}


export default ProductsContainer
