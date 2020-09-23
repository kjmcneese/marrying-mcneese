import React from 'react';
import SmallText from './SmallText';

class RouteTop extends React.Component {
    render() {
        return (
            <div className="routeTop">
                <h4>{ this.props.pageTitle }</h4>
                { this.props.pageNotice && (<SmallText regularText={ this.props.pageNotice } />)}
            </div>
        );
    }
}

export default RouteTop;