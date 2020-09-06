import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../css/AppBody.scss';

import Home from './Home';
import RouteSection1 from './RouteSection1';
import RouteSection2 from './RouteSection2';
import RouteSection3 from './RouteSection3';


class AppBody extends React.Component {
    render() {
        const routeComponentList = [RouteSection1, RouteSection2, RouteSection3];
        const routeSections = [];
        for (var i = 0; i < this.props.appData.routeTitles.length; i++) {
            var routeTitle = this.props.appData.routeTitles[i];
            routeSections.push(<Route path={ "/" + routeTitle } component={ routeComponentList[i] } key={ routeTitle } />);
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