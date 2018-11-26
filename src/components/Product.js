import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Product = ({product}) =>
<div className="card container" key={product.id} >
  <div className="box">
    <div className="img container">

      <img src={product.image} alt={product.description}/>
    </div>
    <h2>{product.name}</h2>
    <span>{product.description}</span>

      <div className="display-rating">
      Ocena {product.avg}
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
      </div>

      <div>
      <a href="#">(Opinie - {product.opinions_count})</a>
      </div>
  </div>
</div>

export default Product
