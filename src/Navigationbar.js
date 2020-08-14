import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
    return (
        <Navbar expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Ceremony</Nav.Link>
                <Nav.Link href="#link">Reception</Nav.Link>
                <Navbar.Brand href="#home">Kyle & Lauren</Navbar.Brand>
                <Nav.Link href="#link">Registry</Nav.Link>
                <NavDropdown title="Photos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Proposal</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Engagement</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Wedding</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;