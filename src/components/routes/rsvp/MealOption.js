import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

class MealOption extends React.Component {

  render() {
    return (
      <ListGroup.Item key={ this.props.mealOption.shortName }>
        <div className="formMealCheck">
          <Form.Check type="radio" id={ this.props.mealOption.shortName } name={ "meal" + this.props.isPlusOne } label={ this.props.mealOption.name } value={ this.props.mealOption.shortName } onChange={ () => this.props.updateMeal(this.props.mealOption.name) } required />
        </div>
        <div className="mealDescriptionSides smallText">
          <p className="noMarginBottom">{ this.props.mealOption.description }</p>
          { this.props.mealOption.sides && ( <p className="noMarginBottom">Sides: { this.props.mealOption.sides }</p> ) }
        </div>
      </ListGroup.Item>
    );
  }
}

export default MealOption;