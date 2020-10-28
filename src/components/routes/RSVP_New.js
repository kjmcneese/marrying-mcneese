import React from 'react';

import RouteTop from './reusable/RouteTop';
import CustomAlert from '../reusable/CustomAlert';
import RSVPForm from './rsvp/RSVPForm';

class RSVP extends React.Component {
  constructor(props) {
    super();

    this.state = {
      alertVariant : "",
      alertMessage : ""
    }

    this.updateAlert = this.updateAlert.bind(this);
    this.dismissAlert = this.dismissAlert.bind(this);
  }

  static rsvpPageTitle = "RSVP";
  static rsvpPageNotice = "Please only RSVP if you were invited to the events. If given a +1, please RSVP for them as well.";

  updateAlert(variant, message) {
    this.setState({
      alertVariant : variant,
      alertMessage : message
    });
  }

  dismissAlert() {
    this.setState({
      alertVariant : "",
      alertMessage : ""
    });
  }

  render() {
    return (
      <div>
        <RouteTop pageTitle={ RSVP.rsvpPageTitle } pageNotice={ RSVP.rsvpPageNotice } />
        <CustomAlert variant={ this.state.alertVariant } message={ this.state.alertMessage } dismissAlert={ this.dismissAlert } />
        <RSVPForm updateAlert={ this.updateAlert } dismissAlert={ this.dismissAlert } />
      </div>
    );
  }
}

export default RSVP;