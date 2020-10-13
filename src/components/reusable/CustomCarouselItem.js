import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class CustomCarouselItem extends React.Component {
  render() {
    return (
      <div>
        <img className="d-block w-100" src={ this.props.image } alt="Carousel slide"/>
        <Carousel.Caption>
          <h4 className="carouselCaption">{ this.props.hashtag } - { this.props.weddingDate }</h4>
        </Carousel.Caption>
      </div>
    );
  }
}

export default CustomCarouselItem;