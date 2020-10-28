import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import MealOption from './MealOption';

import Constants from '../../../Constants';

import { getMealOptions, addRSVP } from '../../../services/firebaseConfig';

class RSVPForm extends React.Component {
  constructor(props) {
    super(props);

    // this.rsvpElement = React.createRef();
    // this.plusOneElement = React.createRef();

    this.state = {
      mealOptions : [],
      rsvp : { plusOne : null },
      validated : false
    }

    this.updateGuestInfo = this.updateGuestInfo.bind(this);
    this.updatePlusOneInfo = this.updatePlusOneInfo.bind(this);

    // this.updateRSVP = this.updateRSVP.bind(this);
    // this.submitRSVP = this.submitRSVP.bind(this);
  }

  componentDidMount() {
    getMealOptions().then( (results) => {
      this.setState({
        mealOptions : results.docs.map(doc => {
          let mealOption = doc.data();
          return <MealOption mealOption={ mealOption } key={ mealOption.name } />;
        })
      });
    });
  }

  // Called from GuestInfoForm child each time any user input is changed
  // TODO: Since the rsvp info in this component state is not rendered anywhere
  //       and only used for DB call, try to only update rsvp object right before
  //       posting the rsvp to the DB.
  updateGuestInfo(guestInfo) {

    if (guestInfo.attending && guestInfo.bringingPlusOne) {
      this.setState(prev => ({
        rsvp : {
          meal : guestInfo.meal,
          ...prev.rsvp
        }
      }));
    } else if (guestInfo.attending && !guestInfo.bringingPlusOne) {
      this.setState({
        rsvp : {
          meal : guestInfo.meal,
          plusOne : null
        }
      });
    } else {
      this.setState({
        rsvp : {
          meal : "",
          plusOne : null
        }
      });
    }

    this.setState(prev => ({
      rsvp : {
        name : guestInfo.name,
        attending : guestInfo.attending,
        comments : guestInfo.comments,
        ...prev.rsvp
      }
    }));
  }

  updatePlusOneInfo() {

  }

  // updateRSVP(obj, isPlusOne) {
  //   if (isPlusOne) {
  //     this.setState(prev => ({
  //       rsvp : {
  //         ...prev.rsvp,
  //         plusOne : obj
  //       }
  //     }));
  //   } else {
  //     if (obj.attending) {
  //       this.setState(prev => ({
  //         rsvp : {
  //           ...prev.rsvp,
  //           name : obj.name,
  //           attending : obj.attending,
  //           meal : obj.meal,
  //           comments : obj.comments
  //         }
  //       }));
  //     } else {
  //       this.setState({
  //         rsvp : {
  //           name : obj.name,
  //           attending : obj.attending,
  //           meal : obj.meal,
  //           comments : obj.comments,
  //           plusOne : null
  //         }
  //       });
  //     }
      
  //   }
  // }
  
  // // used only for hiding and showing elements based on the checkbox input
  // updatePlusOne(e) {
  //   const newValue = e.target.checked;
  //   this.setState(prev => ({
  //     rsvp : {
  //       ...prev.rsvp,
  //       plusOne : newValue ? {} : null
  //     }
  //   }));
  // }

  // submitRSVP(e) {
  //   const form = e.currentTarget;
  //   e.preventDefault();

  //   if (form.checkValidity() === false) {
  //     e.stopPropagation();
  //     this.setState( { validated : true } );
  //   }
    
  //   if (form.checkValidity() === true) {
  //     this.setState( { validated : false } );
      
  //     addRSVP(this.state.rsvp).then(this.addRSVPSuccess()).catch(() => this.addRSVPFailure());
  //   }
  // }

  // addRSVPSuccess() {
  //   this.rsvpElement.current.clearForm();
  //   if (this.state.rsvp.plusOne !== null) {
  //     this.plusOneElement.current.clearForm();
  //   }

  //   this.setState({
  //     rsvp : {
  //       plusOne : null
  //     },
  //     alertVariant : Constants.VARIANT_SUCCESS,
  //     alertMessage : Constants.SUCCESS
  //   });
  // }

  // addRSVPFailure() {
  //   this.setState({
  //     alertVariant : Constants.VARIANT_DANGER,
  //     alertMessage : Constants.ACTION_FAILURE
  //   });
  // }

  render() {
    return (
      <Form id="rsvpForm" noValidate validated={ this.state.validated } onSubmit={ this.submitRSVP }>
        {/* <GuestInfoForm mealOptions={ this.state.mealOptions } updateGuestInfo={ this.updateGuestInfo } />
        <PlusOneInfoForm mealOptions={ this.state.mealOptions } /> */}
        <Button className="rsvpSubmitButton" type="submit">{ Constants.SUBMIT }</Button>

        {/* <RSVPForm ref={ this.rsvpElement } updateRSVP={ this.updateRSVP } isPlusOne={ false } mealOptions={ this.state.mealOptions } shouldClearForm={ this.state.shouldClearForm } />

        { this.state.rsvp.attending && (
          <Form.Group controlId="formPlusOneExists">
            <Form.Check label={ RSVP.plusOneLabel } checked={ this.state.rsvp.plusOne !== null } onChange={ this.updatePlusOne } />
          </Form.Group>
        )}

        { this.state.rsvp.attending && this.state.rsvp.plusOne !== null && (
          <RSVPForm ref={ this.plusOneElement } updateRSVP={ this.updateRSVP } isPlusOne={ true } mealOptions={ this.state.mealOptions } shouldClearForm={ this.state.shouldClearForm } />
        )} */}

      </Form>
    );
  }
}

export default RSVPForm;