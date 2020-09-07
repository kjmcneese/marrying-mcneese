import React from 'react';
import Image from 'react-bootstrap/Image';
import tinsmith from '../../images/tinsmith.jpg';
import '../../css/Tinsmith.scss';

let venue = require('../../json/venue.json');
let venueImgAlt = "Image preview of The Tinsmith";
let notice = "All events take place at ";

class Tinsmith extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <a href={ venue.addressLink } target="_blank" rel="noopener noreferrer">{ venue.address + ", " + this.props.city }</a>
                </p>
                <p>
                    <a href={ venue.website } target="_blank" rel="noopener noreferrer">
                        <Image className="homepageImage" src={ tinsmith } alt={ venueImgAlt } roundedCircle />
                    </a>
                </p>
                <p className="smallFont">
                    { notice }
                    <a href={ venue.website } target="_blank" rel="noopener noreferrer">{ venue.name }</a>
                </p>
            </div>
        );
    }
}

export default Tinsmith;