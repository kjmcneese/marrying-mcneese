import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import RouteTop from './reusable/RouteTop';
import RSVPForm from './rsvp/RSVPForm';
import CustomAlert from '../reusable/CustomAlert';

import Constants from '../../Constants';

import { getMealOptions, addRSVP } from '../../services/firebaseConfig';

class RSVP extends React.Component {
  constructor() {
    super();

    this.state = {
      mealOptions : [],

      rsvp : {},
      plusOneExists : false,
      plusOne : {},

      validated : false,
      submitSuccess : null,
      alertVariant : "",
      alertMessage : ""
    }

    this.updateRSVP = this.updateRSVP.bind(this);
    this.updatePlusOneExists = this.updatePlusOneExists.bind(this);
    this.submitRSVP = this.submitRSVP.bind(this);
    this.dismissAlert = this.dismissAlert.bind(this);
  }

  static rsvpPageTitle = "RSVP";
  static rsvpPageNotice = "Please only RSVP if you were invited to the events. If given a +1, please RSVP for them as well.";

  componentDidMount() {
    getMealOptions().then( (results) => {
      this.setState( { mealOptions : results } );
    });
  }

  updateRSVP(rsvpObj, isPlusOne) {
    if (isPlusOne) {
      this.setState( { plusOne : rsvpObj } );
    } else {
      this.setState( { rsvp : rsvpObj } );
    }
  }
  
  updatePlusOneExists(e) {
    this.setState( { plusOneExists : e.target.checked } );
  }

  submitRSVP(e) {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
      this.setState( { validated : true } );
    }
    
    if (form.checkValidity() === true) {
      this.setState( { validated : false } );

      addRSVP({
        name : this.state.name,
        attending : this.state.attending,
        meal : this.state.meal,
        comments : this.state.comments
      }).then(this.addRSVPSuccess(form)).catch(this.addRSVPFailure());

      this.closeAlertTimer = setInterval(
        function() {
          this.dismissAlert();
      }.bind(this), 10000);
    }
  }

  addRSVPSuccess(form) {
    form.reset();

    this.setState({
      name : "",
      attending : false,
      meal : "",
      comments : "",
      alertVariant : Constants.VARIANT_SUCCESS,
      alertMessage : Constants.SUCCESS
    });
  }

  addRSVPFailure() {
    this.setState({
      alertVariant : Constants.VARIANT_DANGER,
      alertMessage : Constants.ACTION_FAILURE
    });
  }

  dismissAlert() {
    clearInterval(this.closeAlertTimer);
    this.setState({
      alertVariant : "",
      alertMessage : ""
    });
  }

  render() {
    return (
      <div>
        <RouteTop pageTitle={ RSVP.rsvpPageTitle } pageNotice={ RSVP.rsvpPageNotice } />

        { this.state.alertVariant !== "" && (
          <CustomAlert variant={ this.state.alertVariant } message={ this.state.alertMessage } dismissAlert={ this.dismissAlert } />
        )}

        <Form id="rsvpForm" noValidate validated={ this.state.validated } onSubmit={ this.submitRSVP }>
          <RSVPForm updateRSVP={ this.updateRSVP } isPlusOne={ false } mealOptions={ this.state.mealOptions } />

          <Form.Group controlId="formPlusOneExists">
            <Form.Check label={ Constants.PLUS_ONE_LABEL } checked={ this.state.plusOneExists } onChange={ this.updatePlusOneExists } />
          </Form.Group>

          { this.state.plusOneExists && (
            <RSVPForm updateRSVP={ this.updateRSVP } isPlusOne={ true } mealOptions={ this.state.mealOptions } />
          )}

          <Button className="rsvpSubmitButton" type="submit">{ Constants.SUBMIT }</Button>
        </Form>
      </div>
    );
  }
}

export default RSVP;