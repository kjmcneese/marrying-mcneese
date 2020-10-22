import React from 'react';

import SmallText from '../reusable/SmallText';

import { getVenue } from '../../services/firebaseConfig';

class Venue extends React.Component {

  constructor() {
    super();

    this.state = {
      venue : {}
    }
  }
  
  componentDidMount() {
    getVenue().then( results => {
      this.setState( { venue : results.docs.map(doc => doc.data())[0] } );
    });
  }

  render() {
    return (
      <div>
        <SmallText linkText={ this.state.venue.name } webLink={ this.state.venue.website } />
        <SmallText linkText={ this.state.venue.address + ", " + this.state.venue.city } webLink={ this.state.venue.addressLink } />
      </div>
    );
  }
}

export default Venue;