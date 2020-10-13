import React from 'react';

import RouteTop from '../reusable/RouteTop';
import RSVPForm from './RSVPForm';

import Constants from '../../Constants';

function RSVP() {
  return (
    <div>
      <RouteTop pageTitle={ Constants.rsvpPageTitle() } pageNotice={ Constants.rsvpPageNotice() } />
      <RSVPForm />
    </div>
  );
}

export default RSVP;