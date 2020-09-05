import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../css/AppHeader.scss';

class AppHeader extends React.Component {
    render() {
        const anchorLinks = [];
        for (var anchorTitle of this.props.appData.anchorTitles) {
            anchorLinks.push(<Nav.Link href={ "/#" + anchorTitle } className="navigationBarText">{ anchorTitle }</Nav.Link>);
        }

        const routeLinks = [];
        for (var routeTitle of this.props.appData.routeTitles) {
            routeLinks.push(<Nav.Link href={ "/" + routeTitle } className="navigationBarText">{ routeTitle }</Nav.Link>);
        }

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