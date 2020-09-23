import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class AppHeader extends React.Component {
    render() {
        const anchorLinks = [];
        for (var homeSectionTitle of this.props.appData.homeSectionTitles) {
            anchorLinks.push(
                <Nav.Link href={ "/#" + homeSectionTitle } className="navLink" key={ homeSectionTitle }>
                    <div className="headerText">{ homeSectionTitle }</div>
                </Nav.Link>
            );
        }

        const routeLinks = [];
        for (var routeTitle of this.props.appData.routeTitles) {
            routeLinks.push(
                <Nav.Link href={ "/" + routeTitle } className="navLink" key={ routeTitle }>
                    <div className="headerText">{ routeTitle }</div>
                </Nav.Link>
            );
        }

        return (
            <header className="appHeader">
                <Navbar className="navigationBar mr-auto" expand="md">
                    <div className="navBrandDuringToggle">
                        <Navbar.Brand href={ "/" }>
                            <div className="navBrand">{ this.props.appData.siteTitle }</div>
                        </Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navOptions mr-auto">
                            { anchorLinks }
                            <Navbar.Brand href={ "/" } className="hideNavOption">
                                <div className="navBrand">{ this.props.appData.siteTitle }</div>
                            </Navbar.Brand>
                            { routeLinks }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

export default AppHeader;