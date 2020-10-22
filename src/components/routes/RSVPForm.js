import React from 'react';

import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Constants from '../../Constants';

import { getMealOptions, addRSVP } from '../../services/firebaseConfig';

class RSVPForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name : "",
      attending : false,
      meal : "",
      mealListGroupItems : [],
      comments : "",
      validated : false,
      submitSuccess : null
    }

    this.updateName = this.updateName.bind(this);
    this.updateAttending = this.updateAttending.bind(this);
    this.updateMeal = this.updateMeal.bind(this);
    this.updateComments = this.updateComments.bind(this);
    this.submitRSVP = this.submitRSVP.bind(this);
    this.dismissAlert = this.dismissAlert.bind(this);
  }

  static namePlaceholder = "Who are you?";
  static formInvalidName = "Don't forget who you are!";
  static commentsPlaceholder = "Anything else we need to know?!";

  componentDidMount() {
    getMealOptions().then( (results) => {
      let docData = {};
      results.forEach( (doc) => {
        docData = doc.data();
        this.state.mealListGroupItems.push(
          <ListGroup.Item key={ docData.shortName }>
            <div className="formMealCheck">
              <Form.Check type="radio" id={ docData.shortName } name="meal" label={ docData.name } value={ docData.shortName } onChange={ this.updateMeal } required />
            </div>
            <div className="mealDescriptionSides smallText">
              <p className="noMarginBottom">{ docData.description }</p>
              { docData.sides && ( <p className="noMarginBottom">Sides: { docData.sides }</p> ) }
            </div>
          </ListGroup.Item>
        )
      })

      this.setState( { mealListGroupItems : this.state.mealListGroupItems } );
    });
  }

  updateName(e) {
    this.setState( { name : e.target.value } );
  }

  updateAttending(e) {
    this.setState( { attending : e.target.checked } );
  }

  updateMeal(e) {
    this.setState( { meal : e.target.value } );
  }

  updateComments(e) {
    this.setState( { comments : e.target.value } );
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
      let self = this;

      addRSVP({
        name : this.state.name,
        attending : this.state.attending,
        meal : this.state.meal,
        comments : this.state.comments
      }).then(function() {
        form.reset();

        self.setState({
          name : "",
          attending : false,
          comments : "",
          submitSuccess : true
        });
      }).catch(function() {
        self.setState({
          submitSuccess : false
        });
      }).then(function() {
        self.closeAlertTimer = setInterval(function() {
          self.setState( { submitSuccess : null } );
          clearInterval(self.closeAlertTimer);
        }, 10000);
      });
    }
  }

  dismissAlert() {
    this.setState( { submitSuccess : null } );
  }

  render() {
    return (
      <Form id="rsvpForm" noValidate validated={ this.state.validated } onSubmit={ this.submitRSVP }>
        { this.state.submitSuccess === true && (
          <Alert variant="success" onClose={ this.dismissAlert } dismissible>
            <p className="noMarginBottom">{ Constants.SUCCESS }</p>
          </Alert>
        )}
        { this.state.submitSuccess === false && (
          <Alert variant="danger" onClose={ this.dismissAlert } dismissible>
            <p className="noMarginBottom">{ Constants.ACTION_FAILURE }</p>
          </Alert>
        )}

        <Form.Group controlId="formPersonName">
          <Form.Label>{ Constants.NAME_LABEL }</Form.Label>
          <Form.Control placeholder={ RSVPForm.namePlaceholder } value={ this.state.name } className="placeholderInput" onChange={ this.updateName } required />
          <Form.Control.Feedback>{ Constants.FORM_GOOD_FEEDBACK }</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">{ RSVPForm.formInvalidName }</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAttending">
          <Form.Check label={ Constants.ATTENDING_LABEL } onChange={ this.updateAttending } />
        </Form.Group>

        { this.state.attending && (
          <Form.Group controlId="formMeal" >
            <Form.Label>{ Constants.DINNER_MEAL_LABEL }</Form.Label>
            <ListGroup>
              { this.state.mealListGroupItems }
            </ListGroup>
          </Form.Group>
        )}

        <Form.Group controlId="formComments">
          <Form.Label>{ Constants.COMMENTS_LABEL }</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder={ RSVPForm.commentsPlaceholder } value={ this.state.comments } className="placeholderInput" onChange={ this.updateComments } />
        </Form.Group>

        <Button className="rsvpSubmitButton" type="submit">{ Constants.SUBMIT }</Button>
      </Form>
    );
  }
}

export default RSVPForm;