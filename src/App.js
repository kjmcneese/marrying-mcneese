import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/App.css';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Accommodations from './Accommodations';
import Registry from './Registry';


var homeRoute = "/";
var route1 = homeRoute + "Accommodations";
var route2 = homeRoute + "Registry";
// var route3 = homeRoute + "Photos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar/>
      </header>
      <div className="App-body">
        <Switch>
          <Route path={homeRoute} component={Home} exact />
          <Route path={route1} component={Accommodations} />
          <Route path={route2} component={Registry} />
          {/* <Route path={route3} component={Photos} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;