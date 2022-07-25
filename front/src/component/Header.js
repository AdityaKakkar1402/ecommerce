import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaUserAlt,FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="navcont " id="navbarmain">
     <Container>
     <Navbar.Brand className="navhead " id="navleftitem" href="/">Adi Ecom.</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto navitem" id="navrightitems">
        <div className="cartnavitem">
      
      <Nav.Link href="/cart"><FaShoppingCart className="carticon"/>Cart</Nav.Link>
      </div>
      <div className="signnavitem">
      <Nav.Link href="/signin"><FaUserAlt className="usericon"/>Sign in</Nav.Link>
      </div>
     

    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>

    </div>
  )
}

export default Header
