import React from 'react';
import CustomCarousel from '../homeSections/CustomCarousel';
import HomeSection from '../reusable/HomeSection';
import '../../css/Home.scss';

class Home extends React.Component {
  render() {
    const homeSections = [];
    for (var i = 0; i < this.props.appData.homeSectionTitles.length; i++) {
        var homeSectionTitle = this.props.appData.homeSectionTitles[i];
        homeSections.push(<HomeSection appData={ this.props.appData } sectionTitle={ homeSectionTitle } sectionIndex={ i } key={ homeSectionTitle } />);
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