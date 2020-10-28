import React from 'react';

function RouteTop(props) {
  return (
    <div className="routeTop">
      <h4>{ props.pageTitle }</h4>
      { props.pageNotice && (<div className="smallText">{ props.pageNotice }</div>)}
    </div>
  );
}

export default RouteTop;