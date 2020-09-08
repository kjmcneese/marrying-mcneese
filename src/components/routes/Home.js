import React from 'react';
import CustomCarousel from '../homeSections/CustomCarousel';
import HomeSection from '../reusable/HomeSection';
import weddingSectionImage from '../../images/proposal/IMG_1526.JPEG';
import venueSectionImage from '../../images/tinsmith.jpg';
import scheduleSectionImage from '../../images/proposal/IMG_1535.JPEG';

import '../../css/Home.scss';

class Home extends React.Component {
  render() {
    const sectionImages = [weddingSectionImage, venueSectionImage, scheduleSectionImage];
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