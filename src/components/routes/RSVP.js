import React from 'react';
import RouteTop from '../reusable/RouteTop';
import FormRSVP from './FormRSVP';

const pageTitle = "RSVP";
const pageNotice = "Please only RSVP if you were invited to the events. If given a +1, please RSVP for them as well.";

function RSVP() {
  return (
    <div>
      <RouteTop pageTitle={ pageTitle } pageNotice={ pageNotice } />
      <FormRSVP />
    </div>
  );
}

export default RSVP;