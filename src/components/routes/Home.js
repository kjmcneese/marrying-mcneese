import React from 'react';

import CustomCarousel from './home/CustomCarousel';
import HomeSection from './home/HomeSection';

import weddingSectionImage from '../../images/homepage/Lauren and Kyle _ Madison WI Engagement-103_Cropped.jpg';
import venueSectionImage from '../../images/homepage/tinsmith_Cropped.jpg';
import scheduleSectionImage from '../../images/homepage/Lauren and Kyle _ Madison WI Engagement-151_Cropped.jpg';
import vendorsSectionImage from '../../images/homepage/Lauren and Kyle _ Madison WI Engagement-197_Cropped.jpg';

class Home extends React.Component {

  getHomeSections() {
    if (this.props.appDataExists) {
      const sectionImages = [ weddingSectionImage, venueSectionImage, scheduleSectionImage, vendorsSectionImage ];
      return this.props.appData.homeSectionTitles.map( (homeSectionTitle, index) => 
        <HomeSection appData={ this.props.appData } sectionTitle={ homeSectionTitle } sectionIndex={ index } sectionImage={ sectionImages[index] } key={ homeSectionTitle } />
      );
    }

    return [];
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