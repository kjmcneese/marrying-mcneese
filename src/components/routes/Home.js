import React from 'react';
import CustomCarousel from '../homeSections/CustomCarousel';
import HomeSection from '../reusable/HomeSection';
import weddingSectionImage from '../../images/homepage/Lauren and Kyle _ Madison WI Engagement-103_Cropped.jpg';
import venueSectionImage from '../../images/homepage/tinsmith_Cropped.jpg';
import scheduleSectionImage from '../../images/homepage/Lauren and Kyle _ Madison WI Engagement-151_Cropped.jpg';
import vendorsSectionImage from '../../images/homepage/Lauren and Kyle _ Madison WI Engagement-197_Cropped.jpg';

class Home extends React.Component {
  render() {
    const sectionImages = [weddingSectionImage, venueSectionImage, scheduleSectionImage, vendorsSectionImage];
    const homeSections = [];

    for (let homeSection of this.props.appData.homeSectionTitles.entries()) {
        homeSections.push(
          <HomeSection appData={ this.props.appData } sectionTitle={ homeSection[1] } sectionImage = { sectionImages[homeSection[0]]} sectionIndex={ homeSection[0] } key={ homeSection[1] } />
        );
    }

    return (
      <div>
        <CustomCarousel hashtag={ this.props.appData.hashtag } weddingDate={ this.props.appData.weddingDate }/>
        { homeSections }
      </div>
    );
  }
}

export default Home;