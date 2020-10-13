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

  componentDidMount() {
    getMealOptions().then( (results) => {
      let docData = {};
      results.forEach( (doc) => {
        docData = doc.data();
        this.state.mealListGroupItems.push(
          <ListGroup.Item key={ docData.ShortName }>
            <div className="formMealCheck">
              <Form.Check type="radio" id={ docData.ShortName } name="meal" label={ docData.Name } value={ docData.ShortName } onChange={ this.updateMeal } required />
            </div>
            <div className="mealDescriptionSides smallText">
              <p className="noMarginBottom">{ docData.Description }</p>
              { docData.Sides && ( <p className="noMarginBottom">Sides: { docData.Sides }</p> ) }
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
            <p className="noMarginBottom">{ Constants.success() }</p>
          </Alert>
        )}
        { this.state.submitSuccess === false && (
          <Alert variant="danger" onClose={ this.dismissAlert } dismissible>
            <p className="noMarginBottom">{ Constants.actionFailure() }</p>
          </Alert>
        )}

        <Form.Group controlId="formPersonName">
          <Form.Label>{ Constants.nameLabel() }</Form.Label>
          <Form.Control placeholder={ Constants.namePlaceholder() } value={ this.state.name } className="placeholderInput" onChange={ this.updateName } required />
          <Form.Control.Feedback>{ Constants.formGoodFeedback() }</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">{ Constants.formInvalidName() }</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAttending">
          <Form.Check label={ Constants.attendingLabel() } onChange={ this.updateAttending } />
        </Form.Group>

        { this.state.attending && (
          <Form.Group controlId="formMeal" >
            <Form.Label>{ Constants.dinnerMealLabel() }</Form.Label>
            <ListGroup>
              { this.state.mealListGroupItems }
            </ListGroup>
          </Form.Group>
        )}

        <Form.Group controlId="formComments">
          <Form.Label>{ Constants.commentsLabel() }</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder={ Constants.commentsPlaceholder() } value={ this.state.comments } className="placeholderInput" onChange={ this.updateComments } />
        </Form.Group>

        <Button className="rsvpSubmitButton" type="submit">{ Constants.submit() }</Button>
      </Form>
    );
  }
}

export default RSVPForm;