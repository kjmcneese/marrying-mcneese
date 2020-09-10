import React from 'react';
import RouteTop from '../reusable/RouteTop';
import FormRSVP from './FormRSVP';

const pageTitle = "RSVP";

function RSVP() {
    return (
        <div>
            <RouteTop pageTitle={ pageTitle } />
            <FormRSVP />
        </div>
    );
}

export default RSVP;