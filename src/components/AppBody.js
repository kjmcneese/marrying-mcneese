import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import Accommodations from './routes/Accommodations';
import Registry from './routes/Registry';
import RSVP from './routes/RSVP';
import Photos from './routes/Photos';

class AppBody extends React.Component {
    render() {
        const routeComponentList = [Accommodations, RSVP, Registry, Photos];
        const routeSections = [];
        for (var i = 0; i < this.props.appData.routeTitles.length; i++) {
            var routeTitle = this.props.appData.routeTitles[i];
            routeSections.push(<Route path={ "/" + routeTitle } component={ routeComponentList[i] } key={ routeTitle } />);
        }

        return (
            <div className="appBody">
                <Switch>
                    <Route path='/' render={(props) => ( <Home { ...this.props } isAuthed={ true } /> )} exact />
                    { routeSections }
                </Switch>
            </div>
        );
    }
}

export default AppBody;