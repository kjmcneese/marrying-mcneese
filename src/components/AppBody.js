import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../css/AppBody.scss';

import Home from './Home';
import Accommodations from './Accommodations';
import Registry from './Registry';
import Photos from './Photos';

var homeRoute = "/";
var route1 = homeRoute + "Accommodations";
var route2 = homeRoute + "Registry";
var route3 = homeRoute + "Photos";

function AppBody() {
    return (
        <div className="appBody">
            <Switch>
                <Route path={homeRoute} component={Home} exact />
                <Route path={route1} component={Accommodations} />
                <Route path={route2} component={Registry} />
                <Route path={route3} component={Photos} />
            </Switch>
        </div>
    );
}

export default AppBody;
