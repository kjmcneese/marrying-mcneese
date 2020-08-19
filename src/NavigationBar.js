import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './css/Navigation.css';

var siteTitle = "Kyle & Lauren";
var link1 = "Wedding";
var link2 = "Tinsmith";
var link3 = "Schedule";
var link4 = "Accommodations";
var link5 = "Registry";
var link6 = "Photos";

function NavigationBar() {
    return (
        <Navbar className="navigationBar" expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navOptions">
                <Nav.Link href="/#Wedding" className="navigationBarText">{link1}</Nav.Link>
                <Nav.Link href="/#Tinsmith" className="navigationBarText">{link2}</Nav.Link>
                <Nav.Link href="/#Schedule" className="navigationBarText">{link3}</Nav.Link>
                <Navbar.Brand href="/" className="navigationBarHeader">{siteTitle}</Navbar.Brand>
                <Nav.Link href="/Accommodations" className="navigationBarText">{link4}</Nav.Link>
                <Nav.Link href="/Registry" className="navigationBarText">{link5}</Nav.Link>
                <Nav.Link href="/Photos" className="navigationBarText">{link6}</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
