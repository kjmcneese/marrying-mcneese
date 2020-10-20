import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class AppHeader extends React.Component {

  getAnchorLinks() {
    let homeSectionLinks = [];
    let homeSectionTitle = "";
    if (this.props.appDataExists) {
      for (homeSectionTitle of this.props.appData.homeSectionTitles) {
        homeSectionLinks.push(
          <Nav.Link href={ "/#" + homeSectionTitle } className="navLink" key={ homeSectionTitle }>
            <div className="headerText">{ homeSectionTitle }</div>
          </Nav.Link>
        );
      }  
    }

    return homeSectionLinks;
  }

  getRouteLinks() {
    let routeLinks = [];
    let routeTitle = "";
    if (this.props.appDataExists) {
      for (routeTitle of this.props.appData.routeTitles) {
        routeLinks.push(
          <Nav.Link href={ "/" + routeTitle } className="navLink" key={ routeTitle }>
            <div className="headerText">{ routeTitle }</div>
          </Nav.Link>
        );
      }
    }

    return routeLinks;
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