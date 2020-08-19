import React from 'react';
import love from './images/love.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Wedding from './Wedding';
import Tinsmith from './Tinsmith';
import Schedule from './Schedule';
import './css/Home.css';

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={love} alt="First slide"/>
          <Carousel.Caption>
            <h4>Marrying McNeese</h4>
            <h4>August 13, 2021</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={love} alt="First slide"/>
          <Carousel.Caption>
            <h4>Marrying McNeese</h4>
            <h4>August 13, 2021</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={love} alt="First slide"/>
          <Carousel.Caption>
            <h4>Marrying McNeese</h4>
            <h4>August 13, 2021</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      <Wedding />
      <Tinsmith /> 
      <Schedule />
    </div>
  );
}

export default Home;