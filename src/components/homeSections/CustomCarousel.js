import React from 'react';
import love from '../../images/love.jpg';
import Carousel from 'react-bootstrap/Carousel';
import CustomCarouselItem from '../reusable/CustomCarouselItem';

class CustomCarousel extends React.Component {
    render() {
        const imageList = [love, love, love];
        const carouselItems = [];
        for (var i = 0; i < imageList.length; i++) {
            carouselItems.push(
                <Carousel.Item key={ "carouselItem" + i }>
                    <CustomCarouselItem hashtag={ this.props.hashtag } weddingDate={ this.props.weddingDate } image={ imageList[i] } />
                </Carousel.Item>
            );
        }

        return (
            <Carousel>
                { carouselItems }
            </Carousel>
        );
    }
}

export default CustomCarousel;