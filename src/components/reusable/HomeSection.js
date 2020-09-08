import React from 'react';
import Image from 'react-bootstrap/Image';
import Wedding from '../homeSections/Wedding';
import Venue from '../homeSections/Venue';
import Schedule from '../homeSections/Schedule';
import '../../css/HomeSection.scss';

class HomeSection extends React.Component {
    render() {
        let classNames = 'homeSection';
        if (this.props.sectionIndex % 2 !== 0) {
            classNames += ' colorBackground';
        }

        let section;
        if (this.props.sectionTitle === "Wedding") {
            section = <Wedding weddingDate={ this.props.appData.weddingDate } weddingTime={ this.props.appData.weddingTime } />;
        } else if (this.props.sectionTitle === "Tinsmith") {
            section = <Venue city={ this.props.appData.city } />;
        } else if (this.props.sectionTitle === "Schedule") {
            section = <Schedule />;
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