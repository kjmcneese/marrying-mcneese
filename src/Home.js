import React from 'react';
import ReactDOM from 'react-dom';
import love from './images/love.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './css/Home.css';


var getTimeUntilWedding = 0;

class Home extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={love} alt="First slide"/>
          <Carousel.Caption>
            <h4>Marrying McNeese</h4>
            {/* <p className="carouselHeaders">August 13, 2021</p> */}
            <p id="timeUntilWedding">{getTimeUntilWedding}</p>
            <p>until I Do</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={love} alt="First slide"/>
          <Carousel.Caption>
            <h4>Our Love Story</h4>
            <p>Check out how we met and how far we've come.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={love} alt="First slide"/>
          <Carousel.Caption>
            <h4>Spooky Wedding</h4>
            <p>We're not superstitious, but we are a little 'stitious.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }


  componentDidMount() {
    var weddingDate = new Date("August 13, 2021 15:00:00").getTime();
    
    this.timer = setInterval(function() {
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
    }, 300);  
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  };  
}

export default Home;