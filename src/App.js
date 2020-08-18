import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import NavigationBar from './NavigationBar';
import Home from './Home';
import Accommodations from './Accommodations';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar/>
      </header>
      <div className="App-body">
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/Accommodations' component={Accommodations} />
        </Switch>
      </div>
    </div>
  );
}

export default App;