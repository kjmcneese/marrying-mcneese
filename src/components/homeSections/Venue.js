import React from 'react';
import SmallText from '../reusable/SmallText';

let venue = require('../../json/venue.json');

class Venue extends React.Component {
  render() {
    // let notice = "All events take place at ";

    return (
      <div>
        {/* Can't say all events are at Tinsmith until we know they are for sure */}
        {/* <SmallText regularText={ notice } linkText={ venue.name } webLink={ venue.website } /> */}
        <SmallText linkText={ venue.name } webLink={ venue.website } />
        <SmallText linkText={ venue.address + ", " + this.props.city } webLink={ venue.addressLink } />
      </div>
    );
  }
}

export default Venue;