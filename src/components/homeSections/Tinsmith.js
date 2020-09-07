import React from 'react';
import SmallText from '../reusable/SmallText';
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
                <SmallText linkText={ venue.address + ", " + this.props.city } webLink={ venue.addressLink } />

                <p>
                    <a href={ venue.website } target="_blank" rel="noopener noreferrer">
                        {/* where is homepageImage class defined? */}
                        <Image className="homepageImage" src={ tinsmith } alt={ venueImgAlt } roundedCircle />
                    </a>
                </p>
                <p>
                    { notice }
                    <a href={ venue.website } target="_blank" rel="noopener noreferrer">{ venue.name }</a>
                </p>
            </div>
        );
    }
}

export default Tinsmith;