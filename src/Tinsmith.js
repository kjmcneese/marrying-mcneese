import React from 'react';
import tinsmith from './images/tinsmith.jpg';
import './css/Tinsmith.css';

function Schedule() {
    return (
        <a name="Tinsmith">
            <div className="anchorSection tinsmithSection">
                <h3>The Tinsmith</h3>
                <p>828 E Main St, Madison, WI 53703</p>
                <p>
                    <a href="https://www.thetinsmith.com/">
                        <img className="homepageImage" src={tinsmith} />
                    </a>
                </p>
                <p>All events take place at <a href="https://www.thetinsmith.com/">The Tinsmith</a></p>
            </div>
        </a>
    );
}

export default Schedule;