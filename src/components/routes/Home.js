import React from 'react';
import CustomCarousel from '../homeSections/CustomCarousel';
import HomeSection from '../reusable/HomeSection';
import weddingSectionImage from '../../images/homepage/Lauren and Kyle _ Madison WI Engagement-103_Cropped.jpg';
import venueSectionImage from '../../images/homepage/tinsmith_Cropped.jpg';
import scheduleSectionImage from '../../images/homepage/Lauren and Kyle _ Madison WI Engagement-151_Cropped.jpg';

class Home extends React.Component {
  render() {
    const sectionImages = [weddingSectionImage, venueSectionImage, scheduleSectionImage, scheduleSectionImage];
    const homeSections = [];
    for (var i = 0; i < this.props.appData.homeSectionTitles.length; i++) {
        var homeSectionTitle = this.props.appData.homeSectionTitles[i];
        homeSections.push(<HomeSection appData={ this.props.appData } sectionTitle={ homeSectionTitle } sectionImage={ sectionImages[i] } sectionIndex={ i } key={ homeSectionTitle } />);
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