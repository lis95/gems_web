import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/navbar.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Navegacion = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" className="navColor">T-Board</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"> 
          </Nav>
            <Form inline>
              <Nav.Link href="#home" className="navColor">Plans & Pricing</Nav.Link>
              <Nav.Link href="#link" className="navColor">Help</Nav.Link>
            <div className="content-button">
              <Button variant="primary" className="boton">Sing in</Button>
            </div> 
            <div className="content-button">
              <Button variant="primary" className="boton">Sing up</Button>
            </div>
          </Form> 
        </Navbar.Collapse>
        </Navbar>
  </div>
  );
}

export default Navegacion; 