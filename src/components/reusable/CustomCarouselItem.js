import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class CustomCarouselItem extends React.Component {
    render() {
        return (
            <div>
                <img className="d-block w-100" src={ this.props.image } alt="First slide"/>
                <Carousel.Caption>
                    <h4>{ this.props.hashtag }</h4>
                    <h4>{ this.props.weddingDate }</h4>
                </Carousel.Caption>
            </div>
        );
    }
}

export default CustomCarouselItem;