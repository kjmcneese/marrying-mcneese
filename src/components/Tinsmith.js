import React from 'react';
import tinsmith from '../images/tinsmith.jpg';
import '../css/Tinsmith.css';

var venueAddressLink = "https://www.google.com/maps/place/The+Tinsmith/@43.0811635,-89.375517,17z/data=!3m1!4b1!4m5!3m4!1s0x880653bdfed64551:0xa643744813c9e53d!8m2!3d43.0811635!4d-89.3733283";
var venueAddress = "828 E Main St, Madison, WI 53703";
var venueSite = "https://www.thetinsmith.com/";
var venueImgAlt = "Image preview of The Tinsmith";

class Tinsmith extends React.Component {
    render() {
        return (
            <div id="Tinsmith">
                <div className="anchorSection tinsmithSection">
                    <h3>{this.props.venue}</h3>
                    <p>
                        <a href={venueAddressLink} target="_blank" rel="noopener noreferrer">{venueAddress}</a>
                    </p>
                    <p>
                        <a href={venueSite} target="_blank" rel="noopener noreferrer">
                            <img className="homepageImage" src={tinsmith} alt={venueImgAlt}/>
                        </a>
                    </p>
                    <p className="smallFont">{this.props.notice}
                        <a href={venueSite} target="_blank" rel="noopener noreferrer">{this.props.venue}</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Tinsmith;