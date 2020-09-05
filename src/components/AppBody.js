import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../css/AppBody.scss';

import Home from './Home';
// These route components should be named generically for better project reuse
import Accommodations from './Accommodations';
import Registry from './Registry';
import Photos from './Photos';


class AppBody extends React.Component {
    render() {
        const routeComponentList = [Accommodations, Registry, Photos];
        const routeSections = [];
        for (var i = 0; i < this.props.appData.routeTitles.length; i++) {
            var routeTitle = this.props.appData.routeTitles[i];
            routeSections.push(<Route path={ "/" + routeTitle } component={ routeComponentList[i] } key={ routeTitle }/>);
        }

        return (
            <div className="appBody">
                <Switch>
                    <Route path="/" component={Home} exact />
                    { routeSections }
                </Switch>
            </div>
        );
    }
}

export default AppBody;