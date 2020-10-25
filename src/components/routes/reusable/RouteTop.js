import React from 'react';

class RouteTop extends React.Component {
  render() {
    return (
      <div className="routeTop">
        <h4>{ this.props.pageTitle }</h4>
        { this.props.pageNotice && (<div className="smallText">{ this.props.pageNotice }</div>)}
      </div>
    );
  }
}

export default RouteTop;