import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './css/Navigation.css';

function NavigationBar() {
    return (
        <Navbar className="navigationBar" expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navOptions">
                <Nav.Link href="#wedding" className="navigationBarText">Wedding</Nav.Link>
                <Nav.Link href="/Accommodations" className="navigationBarText">Accommodations</Nav.Link>
                <Navbar.Brand href="/" className="navigationBarHeader">Kyle & Lauren</Navbar.Brand>
                <Nav.Link href="#registry" className="navigationBarText">Registry</Nav.Link>
                <Nav.Link href="/Photos" className="navigationBarText">Photos</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
