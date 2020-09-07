import React from 'react';
import CustomCarousel from '../homeSections/CustomCarousel';
import Wedding from '../Wedding';
import Tinsmith from '../Tinsmith';
import Schedule from '../Schedule';
import '../../css/Home.scss';

class Home extends React.Component {
  render() {
    const notice = "All events take place at ";
    
    return (
      <div>
        <CustomCarousel hashtag={ this.props.appData.hashtag } weddingDate={ this.props.appData.weddingDate }/>
        
        <Wedding weddingDate={ this.props.appData.weddingDate } />
        <Tinsmith notice={ notice } venue={ this.props.appData.venue } /> 
        <Schedule />
      </div>
    );
  }
}

export default Home;