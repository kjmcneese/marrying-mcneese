import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './css/Navigation.css';

var homeLink = "/";
var homeLinkAnchorPrefix = homeLink + "#";
var siteTitle = "Kyle & Lauren";
var nav1 = "Wedding";
var nav2 = "Tinsmith";
var nav3 = "Schedule";
var nav4 = "Accommodations";
var nav5 = "Registry";
var nav6 = "Photos";

function NavigationBar() {
    return (
        <Navbar className="navigationBar" expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navOptions">
                <Nav.Link href={homeLinkAnchorPrefix + nav1} className="navigationBarText">{nav1}</Nav.Link>
                <Nav.Link href={homeLinkAnchorPrefix + nav2} className="navigationBarText">{nav2}</Nav.Link>
                <Nav.Link href={homeLinkAnchorPrefix + nav3} className="navigationBarText">{nav3}</Nav.Link>
                <Navbar.Brand href={homeLink} className="navigationBarHeader">{siteTitle}</Navbar.Brand>
                <Nav.Link href={homeLink + nav4} className="navigationBarText">{nav4}</Nav.Link>
                <Nav.Link href={homeLink + nav5} className="navigationBarText">{nav5}</Nav.Link>
                <Nav.Link href={homeLink + nav6} className="navigationBarText">{nav6}</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
