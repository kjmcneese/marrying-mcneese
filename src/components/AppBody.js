import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import Accommodations from './routes/Accommodations';
import Registry from './routes/Registry';
import RSVP from './routes/RSVP';
import Photos from './routes/Photos';

class AppBody extends React.Component {

  getRouteSections() {
    if (this.props.appDataExists) {
      const routeComponentList = [ Accommodations, RSVP, Registry, Photos ];
      return this.props.appData.routeTitles.map( (routeTitle, index) =>
        <Route path={ "/" + routeTitle } component={ routeComponentList[index] } key={ routeTitle } />
      );
    }

    return [];
  }

  render() {
    return (
      <div className="appBody">
        <Switch>
          <Route path='/' render={ (props) => ( <Home { ...this.props } isAuthed={ true } /> ) } exact />
          { this.getRouteSections() }
        </Switch>
      </div>
    );
  }
}

export default AppBody;