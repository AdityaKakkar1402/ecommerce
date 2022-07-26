import React from 'react'
import { useState,useEffect } from 'react'
import Product from '../component/Product'
import axios from 'axios'


const Homescreen = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        const fetchProducts=async()=>{
            const {data}=await axios.get('/api/products')
            setProducts(data)

        }
        fetchProducts()
    },[])
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
