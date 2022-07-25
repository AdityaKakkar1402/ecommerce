import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className="footerbody">
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; Adi Ecommerce</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
