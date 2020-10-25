import React from 'react';

import { getSchedule } from '../../../../services/firebaseConfig';

class Schedule extends React.Component {

  constructor() {
    super();

    this.state = {
      schedule : []
    }
  }

  componentDidMount() {
    getSchedule().then( results => {
      let item = {};
      this.setState({
        schedule : results.docs.map( doc => {
          item = doc.data();
          return <div className="smallText" key={ item.name }>{ item.name + " " + item.time }</div>;
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