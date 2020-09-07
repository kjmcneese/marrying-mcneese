import React from 'react';
import Wedding from '../homeSections/Wedding';
import Tinsmith from '../homeSections/Tinsmith';
import Schedule from '../Schedule';
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
            section = <Tinsmith city={ this.props.appData.city } />;
        } else if (this.props.sectionTitle === "Schedule") {
            section = <Schedule />;
        }

        return (
            <div id={ this.props.sectionTitle } className={ classNames }>
                <h3 className="sectionTitle">{ this.props.sectionTitle }</h3>
                <div className="homeSectionContent">{ section }</div>
            </div>
        );
    }
}

export default HomeSection;