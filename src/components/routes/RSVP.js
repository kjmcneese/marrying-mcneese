import React from 'react';

import RouteTop from '../reusable/RouteTop';
import RSVPForm from './rsvp/RSVPForm';

class RSVP extends React.Component {

  static rsvpPageTitle() {
    return "RSVP";
  }

  static rsvpPageNotice() {
    return "Please only RSVP if you were invited to the events. If given a +1, please RSVP for them as well.";
  }

  render() {
    return (
      <div>
        <RouteTop pageTitle={ RSVP.rsvpPageTitle() } pageNotice={ RSVP.rsvpPageNotice() } />
        <RSVPForm />
      </div>
    );
  }
}

export default RSVP;