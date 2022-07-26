import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Rating from '../component/Rating'
import products from '../products'


const ProductScreen = () => {
    const params=useParams();
    const {id}=params;
    const product=products.find((p)=>p._id===id)
  
    return (
        <>
           <div  id="prodpagebtnback">
           <Link className='btn btn-light' id="prodpagebtnback" to='/'>Go Back</Link>
           </div>
           <div className="productpage">
               <div className="productpagetitle">
                   {product.name}
               </div>
               <div className="productpagedetail">
                   <div className="productpageimage">
                       <img src={product.image} alt="k" srcset="" />
                   </div>
                   <div className="productpagedis" id="productpagedis">
                       <div className="productpagedescription">{product.description}</div>
                       
                 
                       <div className="productpagebrand">{product.brand}</div>
                       <div className="productpagecat">{product.cateory}</div>
                       <div className="productpagerev">
                       <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                       </div>
                       <div className="productpagestock">{product.countInStock>0?'In Stock':'Out of Stock'}</div>
                       <div className="productpageprice">Rs. {product.price}</div>
                       <button className="productpagebutton" id={product.countInStock===0?'prodbuttonhide':''} disabled={product.countInStock===0}>ADD TO CART</button>
                   </div>
               </div>
           </div>
        </>
    )
}

export default ProductScreen
