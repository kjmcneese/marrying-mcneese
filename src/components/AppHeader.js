import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class AppHeader extends React.Component {

  getAnchorLinks() {
    if (this.props.appDataExists) {
      return this.props.appData.homeSectionTitles.map( homeSectionTitle => 
        <Nav.Link href={ "/#" + homeSectionTitle } className="navLink" key={ homeSectionTitle }>
          <div className="headerText">{ homeSectionTitle }</div>
        </Nav.Link>
      );
    }

    return [];
  }

  getRouteLinks() {
    if (this.props.appDataExists) {
      return this.props.appData.routeTitles.map( routeTitle => 
        <Nav.Link href={ "/" + routeTitle } className="navLink" key={ routeTitle }>
          <div className="headerText">{ routeTitle }</div>
        </Nav.Link>
      );
    }

    return [];
  }

  render() {
    return (
      <header className="appHeader">
        <Navbar className="navigationBar mr-auto" expand="lg">
          <div className="navBrandDuringToggle">
            <Navbar.Brand href={ "/" }>
              <div className="navBrand">{ this.props.appData.couple }</div>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navOptions mr-auto">
              { this.getAnchorLinks() }
              <Navbar.Brand href={ "/" } className="hideNavOption">
                <div className="navBrand">{ this.props.appData.couple }</div>
              </Navbar.Brand>
              { this.getRouteLinks() }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default AppHeader;