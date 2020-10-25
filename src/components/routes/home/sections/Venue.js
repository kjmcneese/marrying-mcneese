import React from 'react';

import { getVenue } from '../../../../services/firebaseConfig';

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
      <div className="smallText">
        <a href={ this.state.venue.website } className="regularLinkText blockLinkText">{ this.state.venue.name }</a>
        <a href={ this.state.venue.addressLink } className="regularLinkText">{ this.state.venue.address + ", " + this.state.venue.city }</a>
      </div>
    );
  }
}

export default Venue;