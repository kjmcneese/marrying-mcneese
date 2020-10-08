import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class AppHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorLinks : [],
      routeLinks : []
    }

    this.getAnchorLinks = this.getAnchorLinks.bind(this);
    this.getRouteLinks = this.getRouteLinks.bind(this);
  }

  getAnchorLinks() {
    let homeSectionTitle = "";
    for (homeSectionTitle of this.props.appData.homeSectionTitles) {
      this.state.anchorLinks.push(
        <Nav.Link href={ "/#" + homeSectionTitle } className="navLink" key={ homeSectionTitle }>
          <div className="headerText">{ homeSectionTitle }</div>
        </Nav.Link>
      );
    }

    return this.state.anchorLinks;
  }

  getRouteLinks() {
    let routeTitle = "";
    for (routeTitle of this.props.appData.routeTitles) {
      this.state.routeLinks.push(
        <Nav.Link href={ "/" + routeTitle } className="navLink" key={ routeTitle }>
          <div className="headerText">{ routeTitle }</div>
        </Nav.Link>
      );
    }

    return this.state.routeLinks;
  }

  render() {
    return (
      <header className="appHeader">
        <Navbar className="navigationBar mr-auto" expand="lg">
          <div className="navBrandDuringToggle">
            <Navbar.Brand href={ "/" }>
              <div className="navBrand">{ this.props.appData.siteTitle }</div>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navOptions mr-auto">
              { this.getAnchorLinks() }
              <Navbar.Brand href={ "/" } className="hideNavOption">
                <div className="navBrand">{ this.props.appData.siteTitle }</div>
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