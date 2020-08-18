import React from 'react';
import './App.css';

import NavigationBar from './NavigationBar';
import Home from './Home';
import Switch from 'react-bootstrap/esm/Switch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar/>
      </header>
      <div className="App-body">
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;