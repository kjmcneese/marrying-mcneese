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

      rsvp : { plusOne : null },

      validated : false,
      shouldClearForm : false,
      alertVariant : "",
      alertMessage : ""
    }

    this.updateRSVP = this.updateRSVP.bind(this);
    this.updatePlusOne = this.updatePlusOne.bind(this);
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

  updateRSVP(obj, isPlusOne) {
    if (isPlusOne) {
      this.setState(prev => ({
        rsvp : {
          ...prev.rsvp,
          plusOne : obj
        }
      }));
    } else {
      this.setState(prev => ({
        rsvp : {
          ...prev.rsvp,
          name : obj.name,
          attending : obj.attending,
          meal : obj.meal,
          comments : obj.comments
        }
      }));
    }
  }
  
  // used only for hiding and showing elements based on the checkbox input
  updatePlusOne(e) {
    const newValue = e.target.checked;
    this.setState(prev => ({
      rsvp : {
        ...prev.rsvp,
        plusOne : newValue ? {} : null
      }
    }));
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
      
      addRSVP(this.state.rsvp).then(this.addRSVPSuccess(form)).catch(() => this.addRSVPFailure());

      this.closeAlertTimer = setInterval(
        function() {
          this.dismissAlert();
      }.bind(this), 10000);
    }
  }

  addRSVPSuccess(form) {
    form.reset();

    this.setState({
      rsvp : {
        plusOne : null
      },
      shouldClearForm : true,
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
          <RSVPForm updateRSVP={ this.updateRSVP } isPlusOne={ false } mealOptions={ this.state.mealOptions } shouldClearForm={ this.state.shouldClearForm } />

          { this.state.rsvp.attending && (
            <Form.Group controlId="formPlusOneExists">
              <Form.Check label={ Constants.PLUS_ONE_LABEL } checked={ this.state.rsvp.plusOne !== null } onChange={ this.updatePlusOne } />
            </Form.Group>
          )}

          { this.state.rsvp.plusOne !== null && (
            <RSVPForm updateRSVP={ this.updateRSVP } isPlusOne={ true } mealOptions={ this.state.mealOptions } shouldClearForm={ this.state.shouldClearForm } />
          )}

          <Button className="rsvpSubmitButton" type="submit">{ Constants.SUBMIT }</Button>
        </Form>
      </div>
    );
  }
}

export default RSVP;