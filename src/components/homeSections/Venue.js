import React from 'react';
import SmallText from '../reusable/SmallText';

let venue = require('../../json/venue.json');
let notice = "All events take place at ";

class Venue extends React.Component {
    render() {
        return (
            <div>
                <SmallText regularText={ notice } linkText={ venue.name } webLink={ venue.website } />
                <SmallText linkText={ venue.address + ", " + this.props.city } webLink={ venue.addressLink } />
            </div>
        );
    }
}

export default Venue;