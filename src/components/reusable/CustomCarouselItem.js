import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import '../../css/CustomCarouselItem.scss';

class CustomCarouselItem extends React.Component {
    render() {
        return (
            <Carousel.Item>
                <img className="d-block w-100" src={ this.props.love } alt="First slide"/>
                <Carousel.Caption>
                    <h4>{ this.props.hashtag }</h4>
                    <h4>{ this.props.weddingDate }</h4>
                </Carousel.Caption>
            </Carousel.Item>
        );
    }
}

export default CustomCarouselItem;