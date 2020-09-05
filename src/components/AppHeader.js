import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/AppHeader.scss';

const homeLink = "/";
const anchor = "#";
const siteTitle = "Kyle & Lauren";

const anchorTitles = ["Wedding", "Tinsmith", "Schedule"];
const anchorLinks = [];
for (let i = 0; i < anchorTitles.length; i++) {
    anchorLinks.push(<Nav.Link href={homeLink + anchor + anchorTitles[i]} className="navigationBarText">{anchorTitles[i]}</Nav.Link>);
}

const routeTitles = ["Accommodations", "Registry", "Photos"];
const routeLinks = [];
for (let i = 0; i < routeTitles.length; i++) {
    routeLinks.push(<Nav.Link href={homeLink + routeTitles[i]} className="navigationBarText">{routeTitles[i]}</Nav.Link>);
}

function AppHeader() {
    return (
        <header className="appHeader">
            <Navbar className="navigationBar" expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navOptions">
                    { anchorLinks }
                    <Navbar.Brand href={homeLink} className="navigationBarHeader">{siteTitle}</Navbar.Brand>
                    { routeLinks }
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default AppHeader;