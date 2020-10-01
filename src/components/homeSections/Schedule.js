import React from 'react';
import SmallText from '../reusable/SmallText';

// let schedule = require('../../json/schedule.json');

class Schedule extends React.Component {
    render() {
        let notice = "Coming Soon!";

        // const scheduleItems = [];
        // for (var scheduleItem of Object.keys(schedule)) {
        //     scheduleItems.push(<SmallText regularText={ scheduleItem + " " + schedule[scheduleItem]} key={ scheduleItem } />);
        // }

        return (
            <div>
                {/* { scheduleItems } */}
                <SmallText regularText={ notice } />
            </div>
        );
    }
}

export default Schedule;