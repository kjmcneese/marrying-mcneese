import React from 'react';

import SmallText from '../reusable/SmallText';

import { getSchedule } from '../../services/firebaseConfig';

class Schedule extends React.Component {

  constructor() {
    super();

    this.state = {
      schedule : []
    }
  }

  componentDidMount() {
    getSchedule().then( (results) => {
      let item = {};
      this.setState({ 
        schedule : results.docs.map( function(doc) {
          item = doc.data();
          return <SmallText regularText={ item.name + " " + item.time} key={ item.name } />;
        })
      });
    });
  }

  render() {
    return (
      <div>
        { this.state.schedule }
      </div>
    );
  }
}

export default Schedule;