import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import CustomCarouselItem from './CustomCarouselItem';

import image1 from '../../../images/carousel/Lauren and Kyle _ Madison WI Engagement-142_Cropped.jpg';
import image2 from '../../../images/carousel/Lauren and Kyle _ Madison WI Engagement-174_Cropped.jpg';
import image3 from '../../../images/carousel/Lauren and Kyle _ Madison WI Engagement-10_Cropped.jpg';
import image4 from '../../../images/carousel/Lauren and Kyle _ Madison WI Engagement-125_Cropped.jpg';
import image5 from '../../../images/carousel/Lauren and Kyle _ Madison WI Engagement-228_Cropped.jpg';
import image6 from '../../../images/carousel/Lauren and Kyle _ Madison WI Engagement-79_Cropped.jpg';

class CustomCarousel extends React.Component {

  getCarouselItems() {
    const imageList = [ image1, image2, image3, image4, image5, image6 ];

    return imageList.map( (image, index) =>
      <Carousel.Item key={ "carouselItem" + index }>
        <CustomCarouselItem hashtag={ this.props.hashtag } weddingDate={ this.props.weddingDate } image={ image } />
      </Carousel.Item>
    );
  }

  render() {
    return (
      <Carousel>
        { this.getCarouselItems() }
      </Carousel>
    );
  }
}

export default CustomCarousel;