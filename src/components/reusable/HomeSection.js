import React from 'react';

import Image from 'react-bootstrap/Image';

import Wedding from '../homeSections/Wedding';
import Venue from '../homeSections/Venue';
import Schedule from '../homeSections/Schedule';
import Vendors from '../homeSections/Vendors';

class HomeSection extends React.Component {
  render() {
    let classNames = 'homeSection';
    if (this.props.sectionIndex % 2 !== 0) {
      classNames += ' colorBackground';
    }

    let section = "";
    switch (this.props.sectionIndex) {
      case 0:
        section = <Wedding weddingDate={ this.props.appData.weddingDate } weddingTime={ this.props.appData.weddingTime } />;
        break;
      case 1:
        section = <Venue />;
        break;
      case 2:
        section = <Schedule />;
        break;
      case 3:
        section = <Vendors />
        break;
      default:
    }

    return (
      <div id={ this.props.sectionTitle } className={ classNames }>
        <h4 className="sectionTitle">{ this.props.sectionTitle }</h4>
        <Image className="homepageImage" src={ this.props.sectionImage } roundedCircle />
        <div className="homeSectionContent">{ section }</div>
      </div>
    );
  }
}

export default HomeSection;