import React from 'react';
import '../css/Schedule.css';

var sectionTitle = "Schedule";
var item1 = "Ceremony 3:30 pm";
var item2 = "Cocktail Hour 4:15 pm";
var item3 = "Dinner 5:30 pm";
var item4 = "First Dance 7 pm";

class Schedule extends React.Component {
    render() {
        return (
            <div id="Schedule">
                <div className="anchorSection scheduleSection">
                    <h3>{sectionTitle}</h3>
                    <p>{item1}</p>
                    <p>{item2}</p>
                    <p>{item3}</p>
                    <p>{item4}</p>
                </div>
            </div>
        );
    }
}

export default Schedule;