import React from 'react';
import love from '../../images/love.jpg';
import Carousel from 'react-bootstrap/Carousel';
import CustomCarouselItem from '../reusable/CustomCarouselItem';

import '../../css/CustomCarousel.scss';

class CustomCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <CustomCarouselItem hashtag={ this.props.hashtag } weddingDate={ this.props.weddingDate } image={ love }/>
                <CustomCarouselItem hashtag={ this.props.hashtag } weddingDate={ this.props.weddingDate } image={ love }/>
                <CustomCarouselItem hashtag={ this.props.hashtag } weddingDate={ this.props.weddingDate } image={ love }/>
            </Carousel>
        );
    }
}

export default CustomCarousel;