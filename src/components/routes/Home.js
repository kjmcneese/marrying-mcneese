import React from 'react';
import CustomCarousel from '../homeSections/CustomCarousel';
import HomeSection from '../reusable/HomeSection';
import Wedding from '../homeSections/Wedding';
import Tinsmith from '../Tinsmith';
import Schedule from '../Schedule';
import '../../css/Home.scss';

class Home extends React.Component {
  render() {
    const homeSections = [];
    for (var i = 0; i < this.props.appData.homeSectionTitles.length; i++) {
        var homeSectionTitle = this.props.appData.homeSectionTitles[i];
        homeSections.push(<HomeSection sectionTitle={ homeSectionTitle } sectionIndex={ i } key={ homeSectionTitle } />);
    }
    
    return (
      <div>
        <CustomCarousel hashtag={ this.props.appData.hashtag } weddingDate={ this.props.appData.weddingDate }/>
        { homeSections }
        
        {/* <Wedding weddingDate={ this.props.appData.weddingDate } />
        <Tinsmith notice={ notice } venue={ this.props.appData.venue } /> 
        <Schedule /> */}
      </div>
    );
  }
}

export default Home;