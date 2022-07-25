import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../products'

const Homescreen = () => {
    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product=>(
                     <Col>
                     <h2>{product.name}</h2>
                     </Col>
                ))}
               
            </Row>
        </div>
    )
}

export default Homescreen
