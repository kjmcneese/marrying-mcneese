import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../css/AppBody.scss';

import Home from './Home';
import Accommodations from './Accommodations';
import Registry from './Registry';
import Photos from './Photos';

class AppBody extends React.Component {
    render() {
        // How to use this loop generically when component names are different?
        // Can rename components as generic names (ex. RouteSection1, RouteSection2, etc.), but names are still different.
        // const routeSections = [];
        // for (var routeTitle of this.props.appData.routeTitles) {
        //     routeSections.push(<Route path={ "/" + routeTitle } component={Accommodations} />);
        // }

        return (
            <div className="appBody">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path={ "/" + this.props.appData.routeTitles[0] } component={Accommodations} />
                    <Route path={ "/" + this.props.appData.routeTitles[1] } component={Registry} />
                    <Route path={ "/" + this.props.appData.routeTitles[2] } component={Photos} />
                </Switch>
            </div>
        );
    }
}

export default AppBody;