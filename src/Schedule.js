import React from 'react';
import './css/Schedule.css';

function Schedule() {
    return (
        <a name="Schedule">

            <div className="anchorSection scheduleSection">
                <h3>Schedule</h3>
                <p>Ceremony 3:30 pm</p>
                <p>Cocktail Hour 4:15 pm</p>
                <p>Dinner 5:30 pm</p>
                <p>First Dance 7 pm</p>
                <p className="smallFont">* all events take place at <a href="#Tinsmith">The Tinsmith</a></p>
            </div>
        </a>
    );
}

export default Schedule;