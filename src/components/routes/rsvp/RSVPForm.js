import React from 'react';

import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';

import MealOption from './MealOption';

import Constants from '../../../Constants';

class RSVPForm extends React.Component {
  constructor() {
    super();

    this.state = {
      rsvp : {
        name : "",
        attending : false,
        meal : "",
        comments : ""
      }
    }

    this.updateName = this.updateName.bind(this);
    this.updateAttending = this.updateAttending.bind(this);
    this.updateMeal = this.updateMeal.bind(this);
    this.updateComments = this.updateComments.bind(this);
  }

  static namePlaceholder = "Who?";
  static formInvalidName = "Don't forget who you are!";
  static commentsPlaceholder = "Anything else we need to know?!";

  componentDidMount() {
    this.setState(prev => ({
      rsvp : {
        ...prev.rsvp,
        attending : this.props.isPlusOne
      }
    }),
    this.updateRSVP
    );  
  }

  getMealListGroupItems() {
    if (this.props.mealOptions !== []) {
      return this.props.mealOptions.docs.map(doc => {
        let item = doc.data();
        return <MealOption mealOption={ item } updateMeal={ this.updateMeal } key={ item.name } />;
      });
    }

    return [];
  }

  updateName(e) {
    const newValue = e.target.value;
    this.setState(prev => ({
      rsvp : {
        ...prev.rsvp,
        name : newValue
      }
    }),
    this.updateRSVP
    );
  }

  updateAttending(e) {
    const newValue = e.target.checked;
    const newMeal = newValue ? this.state.rsvp.meal : "";
    this.setState(prev => ({
      rsvp : {
        ...prev.rsvp,
        attending : newValue,
        meal : newMeal
      }
    }),
    this.updateRSVP
    );
  }

  updateMeal(mealChecked) {
    this.setState(prev => ({
      rsvp : {
        ...prev.rsvp,
        meal : mealChecked
      }
    }),
    this.updateRSVP
    );
  }

  updateComments(e) {
    const newValue = e.target.value;
    this.setState(prev => ({
      rsvp : {
        ...prev.rsvp,
        comments : newValue
      }
    }),
    this.updateRSVP
    );
  }

  updateRSVP() {
    this.props.updateRSVP(this.state.rsvp, this.props.isPlusOne);
  }

  render() {
    return (
      <div>
 
        <Form.Group controlId="formPersonName">
          <Form.Label>{ Constants.NAME_LABEL }</Form.Label>
          <Form.Control placeholder={ RSVPForm.namePlaceholder } value={ this.state.rsvp.name } className="placeholderInput" onChange={ this.updateName } required />
          <Form.Control.Feedback>{ Constants.FORM_GOOD_FEEDBACK }</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">{ RSVPForm.formInvalidName }</Form.Control.Feedback>
        </Form.Group>

        { !this.props.isPlusOne && (
          <Form.Group controlId="formAttending">
            <Form.Check label={ Constants.ATTENDING_LABEL } checked={ this.state.rsvp.attending } onChange={ this.updateAttending } />
          </Form.Group>
        )}

        { this.state.rsvp.attending && (
          <Form.Group controlId="formMeal" >
            <Form.Label>{ Constants.DINNER_MEAL_LABEL }</Form.Label>
            <ListGroup>
              { this.getMealListGroupItems() }
            </ListGroup>
          </Form.Group>
        )}

        <Form.Group controlId="formComments">
          <Form.Label>{ Constants.COMMENTS_LABEL }</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder={ RSVPForm.commentsPlaceholder } value={ this.state.rsvp.comments } className="placeholderInput" onChange={ this.updateComments } />
        </Form.Group>

      </div>
    );
  }
}

export default RSVPForm;