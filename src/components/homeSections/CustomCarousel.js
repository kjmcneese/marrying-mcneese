import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import CustomCarouselItem from '../reusable/CustomCarouselItem';

import image1 from '../../images/carousel/Lauren and Kyle _ Madison WI Engagement-142_Cropped.jpg';
import image2 from '../../images/carousel/Lauren and Kyle _ Madison WI Engagement-174_Cropped.jpg';
import image3 from '../../images/carousel/Lauren and Kyle _ Madison WI Engagement-10_Cropped.jpg';
import image4 from '../../images/carousel/Lauren and Kyle _ Madison WI Engagement-125_Cropped.jpg';
import image5 from '../../images/carousel/Lauren and Kyle _ Madison WI Engagement-228_Cropped.jpg';
import image6 from '../../images/carousel/Lauren and Kyle _ Madison WI Engagement-79_Cropped.jpg';

class CustomCarousel extends React.Component {
  constructor() {
    super();

    this.state = {
      carouselItems : []
    }

    this.imageList = [image1, image2, image3, image4, image5, image6];
  }

  componentDidMount() {    
    let image = {};
    for (image of this.imageList.entries()) {
      this.state.carouselItems.push(
        <Carousel.Item key={ "carouselItem" + image[0] }>
          <CustomCarouselItem hashtag={ this.props.hashtag } weddingDate={ this.props.weddingDate } image={ image[1] } />
        </Carousel.Item>
      );
    }

    this.setState( { carouselItems : this.state.carouselItems } );
  }

  render() {
    return (
      <Carousel>
        { this.state.carouselItems }
      </Carousel>
    );
  }
}

export default CustomCarousel;