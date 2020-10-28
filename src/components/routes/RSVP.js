import React from 'react';

import RouteTop from './reusable/RouteTop';
import CustomAlert from '../reusable/CustomAlert';
import RSVPForm from './rsvp/RSVPForm';

class RSVP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alertVariant : "",
      alertMessage : ""
    }

    this.updateAlert = this.updateAlert.bind(this);
  }

  static rsvpPageTitle = "RSVP";
  static rsvpPageNotice = "Please only RSVP if you were invited to the events. If given a +1, please RSVP for them as well.";

  updateAlert(variant, message) {
    this.setState({
      alertVariant : variant,
      alertMessage : message
    });
  }

  render() {
    return (
      <div>
        <RouteTop pageTitle={ RSVP.rsvpPageTitle } pageNotice={ RSVP.rsvpPageNotice } />
        <CustomAlert variant={ this.state.alertVariant } message={ this.state.alertMessage } updateAlert={ this.updateAlert } />
        {/* <RSVPForm updateAlert={ this.updateAlert } /> */}
      </div>
    );
  }
}

export default RSVP;