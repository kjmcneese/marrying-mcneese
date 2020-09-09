import React from 'react';
import image1 from '../../images/carousel/Lauren and Kyle _ Madison WI Engagement-142_Cropped.jpg';
import image2 from '../../images/carousel/Lauren and Kyle _ Madison WI Engagement-174_Cropped.jpg';
import image3 from '../../images/carousel/Lauren and Kyle _ Madison WI Engagement-10_Cropped.jpg';
import image4 from '../../images/carousel/Lauren and Kyle _ Madison WI Engagement-151_Cropped.jpg';
import image5 from '../../images/carousel/Lauren and Kyle _ Madison WI Engagement-125_Cropped.jpg';
import image6 from '../../images/carousel/Lauren and Kyle _ Madison WI Engagement-228_Cropped.jpg';
import image7 from '../../images/carousel/Lauren and Kyle _ Madison WI Engagement-79_Cropped.jpg';

import Carousel from 'react-bootstrap/Carousel';
import CustomCarouselItem from '../reusable/CustomCarouselItem';

class CustomCarousel extends React.Component {
    render() {
        const imageList = [image1, image2, image3, image4, image5, image6, image7];
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