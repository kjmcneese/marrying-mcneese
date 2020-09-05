import React from 'react';

import './css/App.scss';

import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';

var appData = require('./appData.json');

function App() {
  return (
    <div className="App">
      <AppHeader appData={ appData }/>
      <AppBody />
    </div>
  );
}

export default App;