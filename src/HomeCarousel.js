import React from 'react';
import ReactDOM from 'react-dom';
import love from './images/love.png';

import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
    return (
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={love} alt="First slide"/>
            <Carousel.Caption>
              <h1>Marrying McNeese</h1>
              {/* <p className="carouselHeaders">August 13, 2021</p> */}
              <h3 id="timeUntilWedding">{getTimeUntilWedding}</h3>
              <h5>until I Do</h5>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
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
          </Carousel.Item> */}
        </Carousel>
    );
}

var getTimeUntilWedding = 0;
var weddingDate = new Date("August 13, 2021 15:00:00").getTime();

setInterval(function() {
  var now = new Date().getTime();
  var difference = weddingDate - now;
    
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
  if (difference < 0) {
    getTimeUntilWedding = "We said \"I DO\"!";
  }

  getTimeUntilWedding = days + " Days, " + hours + " Hours, " + minutes + ":" + seconds + " Minutes";
  ReactDOM.render(getTimeUntilWedding, document.getElementById('timeUntilWedding'));
}, 1000);

export default HomeCarousel;