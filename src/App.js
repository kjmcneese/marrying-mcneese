import React from 'react';
import './App.css';

import NavigationBar from './NavigationBar';
import HomeCarousel from './HomeCarousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar/>
      </header>
      <div className="App-body">
        <HomeCarousel/>
      </div>
    </div>
  );
}

export default App;