import React from 'react';

import '../css/App.scss';

import AppHeader from './AppHeader';
import AppBody from './AppBody';

var appData = require('../json/appData.json');

function App() {
  return (
    <div className="App">
      <AppHeader appData={ appData }/>
      <AppBody appData={ appData }/>
    </div>
  );
}

export default App;