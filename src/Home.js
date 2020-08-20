import React from 'react';
import love from './images/love.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Wedding from './Wedding';
import Tinsmith from './Tinsmith';
import Schedule from './Schedule';
import './css/Home.css';

var carouselTitle = "Marrying McNeese";
var weddingDate = "August 13, 2021";
var notice = "All events take place at ";
var venue = "The Tinsmith";

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={love} alt="First slide"/>
          <Carousel.Caption>
            <h4>{carouselTitle}</h4>
            <h4>{weddingDate}</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={love} alt="First slide"/>
          <Carousel.Caption>
            <h4>{carouselTitle}</h4>
            <h4>{weddingDate}</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={love} alt="First slide"/>
          <Carousel.Caption>
            <h4>{carouselTitle}</h4>
            <h4>{weddingDate}</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <Wedding weddingDate={weddingDate}/>
      <Tinsmith notice={notice} venue={venue}/> 
      <Schedule notice={notice} venue={venue}/>
    </div>
  );
}

export default Home;