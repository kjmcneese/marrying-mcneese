import React from 'react';
import '../../css/HomeSection.scss';

class HomeSection extends React.Component {
    render() {
        let classNames = 'homeSection';
        if (this.props.sectionIndex % 2 !== 0) {
            classNames += ' colorBackground';
        }

        return (
            <div className={ classNames }>
                <h3>{this.props.sectionTitle}</h3>
                
            </div>
        );
    }
}

export default HomeSection;