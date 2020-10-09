import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import Accommodations from './routes/Accommodations';
import Registry from './routes/Registry';
import RSVP from './routes/RSVP';
import Photos from './routes/Photos';

class AppBody extends React.Component {
  constructor() {
    super();
    this.state = {
      routeSections : []
    }

    this.getRouteSections = this.getRouteSections.bind(this);
  }

  getRouteSections() {
    const routeComponentList = [Accommodations, RSVP, Registry, Photos];
    let routeTitle = [];
    for (routeTitle of this.props.appData.routeTitles.entries()) {
      this.state.routeSections.push(
        <Route path={ "/" + routeTitle[1] } component={ routeComponentList[routeTitle[0]] } key={ routeTitle[1] } />
      );
    }

    return this.state.routeSections;
  }

  render() {
    return (
      <div className="appBody">
        <Switch>
          <Route path='/' render={(props) => ( <Home { ...this.props } isAuthed={ true } /> )} exact />
          { this.getRouteSections() }
        </Switch>
      </div>
    );
  }
}

export default AppBody;