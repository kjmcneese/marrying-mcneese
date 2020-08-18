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
                <Nav.Link href="#festivities">Festivities</Nav.Link>
                <Nav.Link href="/Accommodations">Accommodations</Nav.Link>
                <Navbar.Brand href="/">Kyle & Lauren</Navbar.Brand>
                <Nav.Link href="#registry">Registry</Nav.Link>
                <NavDropdown title="Photos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#proposalPhotos">Proposal</NavDropdown.Item>
                    <NavDropdown.Item href="#engagementPhotos">Engagement</NavDropdown.Item>
                    <NavDropdown.Item href="#weddingPhotos">Wedding</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;