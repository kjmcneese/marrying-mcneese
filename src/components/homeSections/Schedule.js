import React from 'react';

import SmallText from '../reusable/SmallText';

import Constants from '../../Constants';

// let schedule = require('../../json/schedule.json');

class Schedule extends React.Component {
  render() {
    // const scheduleItems = [];
    // let scheduleItem = "";
    // for (scheduleItem in schedule) {
    //     scheduleItems.push(<SmallText regularText={ scheduleItem + " " + schedule[scheduleItem]} key={ scheduleItem } />);
    // }

    return (
      <div>
        {/* { scheduleItems } */}
        <SmallText regularText={ Constants.comingSoon() } />
      </div>
    );
  }
}

export default Schedule;