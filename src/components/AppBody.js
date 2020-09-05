import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../css/AppBody.scss';

import Home from './Home';
import Accommodations from './Accommodations';
import Registry from './Registry';
import Photos from './Photos';

var route1 = "/Accommodations";
var route2 = "/Registry";
var route3 = "/Photos";

class AppBody extends React.Component {
    render() {
        return (
            <div className="appBody">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path={route1} component={Accommodations} />
                    <Route path={route2} component={Registry} />
                    <Route path={route3} component={Photos} />
                </Switch>
            </div>
        );
    }
}

export default AppBody;
