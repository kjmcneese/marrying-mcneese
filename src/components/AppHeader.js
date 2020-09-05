import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/AppHeader.scss';

const anchorTitles = ["Wedding", "Tinsmith", "Schedule"];
const anchorLinks = [];
for (let i = 0; i < anchorTitles.length; i++) {
    anchorLinks.push(<Nav.Link href={ "/#" + anchorTitles[i] } className="navigationBarText">{ anchorTitles[i] }</Nav.Link>);
}

const routeTitles = ["Accommodations", "Registry", "Photos"];
const routeLinks = [];
for (let i = 0; i < routeTitles.length; i++) {
    routeLinks.push(<Nav.Link href={ "/" + routeTitles[i] } className="navigationBarText">{ routeTitles[i] }</Nav.Link>);
}


class AppHeader extends React.Component {
    render() {
        return (
            <header className="appHeader">
                <Navbar className="navigationBar" expand="md">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navOptions">
                        { anchorLinks }
                        <Navbar.Brand href={ "/" } className="navigationBarHeader">{ this.props.appData.siteTitle }</Navbar.Brand>
                        { routeLinks }
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

export default AppHeader;