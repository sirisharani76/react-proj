import React from 'react';
import {Navbar,NavDropdown,Nav, Container} from 'react-bootstrap';


function Navigation() {
return (
<Navbar bg="secondary" expand="lg" >
  <Container>
    <Navbar.Brand style={{color:"white"}}  href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link style={{color:"white"}}  href="#home">Home</Nav.Link>
        <Nav.Link style={{color:"white"}}  href="#link">Link</Nav.Link>
        <NavDropdown  title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
                                    
);
}

export default Navigation;