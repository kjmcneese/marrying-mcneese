import React from 'react';
import SmallText from '../reusable/SmallText';

let schedule = require('../../json/schedule.json');

class Schedule extends React.Component {
    render() {
        const scheduleItems = [];
        for (var scheduleItem of Object.keys(schedule)) {
            scheduleItems.push(<SmallText regularText={ scheduleItem + " " + schedule[scheduleItem]} key={ scheduleItem } />);
        }

        return (
            <div>
                { scheduleItems }
            </div>
        );
    }
}

export default Schedule;