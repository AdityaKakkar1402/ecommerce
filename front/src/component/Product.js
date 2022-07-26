import React from 'react'
import {Link} from 'react-router-dom'

import Rating from './Rating'

const Product = ({product}) => {
    return (
    <div className="cardproduct">
       
   
     < img alt="/" src={product.image} id="cardprodimg" />
     <Link to={`/product/${product._id}`} className="prodlink">
     <strong className="cardprodtitle">
         {product.name}
     </strong>
     <div className="cardrev">
        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
     </div>
     <div id="textprod">Rs.{product.price}</div>
     </Link>
    </div>
    
    )
}

export default Product
