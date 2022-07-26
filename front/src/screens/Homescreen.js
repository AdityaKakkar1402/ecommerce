import React from 'react'

import Product from '../component/Product'
import products from '../products'

const Homescreen = () => {
    return (
        <div className="homescreen">
            <h1>Latest Products</h1>
           <div className="prodcontainer">
                {products.map(product=>(
                     <div key={product._id} className="prod">
                     <Product product={product} />
                     </div>
                ))}
                </div>
               
           
        </div>
    )
}

export default Homescreen
