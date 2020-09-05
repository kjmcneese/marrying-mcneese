import React from 'react';

import './css/App.scss';

import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppBody />
    </div>
  );
}

export default App;