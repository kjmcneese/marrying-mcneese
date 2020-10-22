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

  // appInfo does not have data in first render
  // this component loads appData from DB and rerenders
  // created this method to send to children to check if appInfo was loaded on each rerender
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