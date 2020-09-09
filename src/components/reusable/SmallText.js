import React from 'react';

class SmallText extends React.Component {
    render() {
        return (
            <p className="smallText">
                { this.props.regularText }
                <a href={ this.props.webLink } target="_blank" rel="noopener noreferrer">{ this.props.linkText }</a>
            </p>
        );
    }
}

export default SmallText;