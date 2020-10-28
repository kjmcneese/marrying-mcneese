import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Constants from '../../../Constants';

import { addRSVP } from '../../../services/firebaseConfig';

class RSVPForm extends React.Component {

  constructor(props) {
    super(props);

    // this.rsvpElement = React.createRef();
    // this.plusOneElement = React.createRef();

    this.state = {
      rsvp : {},

      validated : false,
      alertVariant : "",
      alertMessage : ""
    }

    this.updateRSVP = this.updateRSVP.bind(this);
    this.updatePlusOne = this.updatePlusOne.bind(this);
    this.submitRSVP = this.submitRSVP.bind(this);
    this.dismissAlert = this.dismissAlert.bind(this);
  }

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
      if (obj.attending) {
        this.setState(prev => ({
          rsvp : {
            ...prev.rsvp,
            name : obj.name,
            attending : obj.attending,
            meal : obj.meal,
            comments : obj.comments
          }
        }));
      } else {
        this.setState({
          rsvp : {
            name : obj.name,
            attending : obj.attending,
            meal : obj.meal,
            comments : obj.comments,
            plusOne : null
          }
        });
      }
      
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
      
      addRSVP(this.state.rsvp).then(this.addRSVPSuccess()).catch(() => this.addRSVPFailure());
    }
  }

  addRSVPSuccess() {
    this.rsvpElement.current.clearForm();
    if (this.state.rsvp.plusOne !== null) {
      this.plusOneElement.current.clearForm();
    }

    this.setState({
      rsvp : {
        plusOne : null
      },
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

  render() {
    return (
      <div>
        <RouteTop pageTitle={ RSVP.rsvpPageTitle } pageNotice={ RSVP.rsvpPageNotice } />

        { this.state.alertVariant !== "" && (
          <CustomAlert variant={ this.state.alertVariant } message={ this.state.alertMessage } dismissAlert={ this.dismissAlert } />
        )}

        <Form id="rsvpForm" noValidate validated={ this.state.validated } onSubmit={ this.submitRSVP }>
          <RSVPForm ref={ this.rsvpElement } updateRSVP={ this.updateRSVP } isPlusOne={ false } mealOptions={ this.state.mealOptions } shouldClearForm={ this.state.shouldClearForm } />

          { this.state.rsvp.attending && (
            <Form.Group controlId="formPlusOneExists">
              <Form.Check label={ RSVP.plusOneLabel } checked={ this.state.rsvp.plusOne !== null } onChange={ this.updatePlusOne } />
            </Form.Group>
          )}

          { this.state.rsvp.attending && this.state.rsvp.plusOne !== null && (
            <RSVPForm ref={ this.plusOneElement } updateRSVP={ this.updateRSVP } isPlusOne={ true } mealOptions={ this.state.mealOptions } shouldClearForm={ this.state.shouldClearForm } />
          )}

          <Button className="rsvpSubmitButton" type="submit">{ Constants.SUBMIT }</Button>
        </Form>
      </div>
    );
  }
}

export default RSVP;