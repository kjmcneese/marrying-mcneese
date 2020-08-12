import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Ceremony</Nav.Link>
              <Nav.Link href="#link">Reception</Nav.Link>
              <Navbar.Brand href="#home">Kyle & Lauren</Navbar.Brand>
              <Nav.Link href="#link">Registry</Nav.Link>
              <NavDropdown title="Photos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Proposal Photos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Engagement Photos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Wedding Photos</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <div className="App-body">

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/love.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Marrying McNeese</h3>
              <p>August 13, 2021</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Our Love Story</h3>
              <p>Check out how we met and how far we've come.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Spooky Wedding</h3>
              <p>We're not superstitious, but we are a little 'stitious.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
    </div>
  );
}

export default App;
