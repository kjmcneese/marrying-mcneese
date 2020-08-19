import React from 'react';
import tinsmith from './images/tinsmith.jpg';
import './css/Tinsmith.css';

var venueAddress = "828 E Main St, Madison, WI 53703";

class Tinsmith extends React.Component {
    render() {
        return (
            <a name="Tinsmith">
                <div className="anchorSection tinsmithSection">
                    <h3>{this.props.venue}</h3>
                    <p>{venueAddress}</p>
                    <p>
                        <a href="https://www.thetinsmith.com/">
                            <img className="homepageImage" src={tinsmith} />
                        </a>
                    </p>
                    <p>{this.props.notice}<a href="https://www.thetinsmith.com/">{this.props.venue}</a></p>
                </div>
            </a>
        );
    }
}

export default Tinsmith;