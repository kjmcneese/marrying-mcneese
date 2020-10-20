import React from 'react';

import CustomCarousel from '../homeSections/CustomCarousel';
import HomeSection from '../reusable/HomeSection';

import weddingSectionImage from '../../images/homepage/Lauren and Kyle _ Madison WI Engagement-103_Cropped.jpg';
import venueSectionImage from '../../images/homepage/tinsmith_Cropped.jpg';
import scheduleSectionImage from '../../images/homepage/Lauren and Kyle _ Madison WI Engagement-151_Cropped.jpg';
import vendorsSectionImage from '../../images/homepage/Lauren and Kyle _ Madison WI Engagement-197_Cropped.jpg';

class Home extends React.Component {

  getHomeSections() {
    const sectionImages = [weddingSectionImage, venueSectionImage, scheduleSectionImage, vendorsSectionImage];
    const homeSections = [];
    let homeSectionEntry = [];
    if (this.props.appDataExists) {
      for (homeSectionEntry of this.props.appData.homeSectionTitles.entries()) {
        homeSections.push(
          <HomeSection appData={ this.props.appData } sectionEntry={ homeSectionEntry } sectionImage = { sectionImages[homeSectionEntry[0]] } key={ homeSectionEntry[1] } />
        );
      }  
    }

    return homeSections;
  }

  render() {
    return (
      <div>
        <CustomCarousel hashtag={ this.props.appData.hashtag } weddingDate={ this.props.appData.weddingDate }/>
        { this.getHomeSections() }
      </div>
    );
  }
}

export default Home;