import React from 'react';

import '../css/App.scss';

import AppHeader from './AppHeader';
import AppBody from './AppBody';

import { getAppInfo } from '../services/firebaseConfig';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      appInfo : {}
    }
  }

  componentDidMount() {
    getAppInfo().then( (results) => {
      this.setState( { appInfo : results.docs.map(doc => doc.data())[0] } );
    });
  }

  // appData prop does not have data in first render
  // parent loads appData from DB and rerenders
  // created this method to check data before each data loop begins
  appDataExists() {
    if (Object.keys(this.state.appInfo).length > 0) {
      return true;
    }
    return false;
  }


  render() {
    return (
      <div className="App">
        <AppHeader appData={ this.state.appInfo } appDataExists={ this.appDataExists() } />
        <AppBody appData={ this.state.appInfo } appDataExists={ this.appDataExists() } />
      </div>
    );
  }
}

export default App;