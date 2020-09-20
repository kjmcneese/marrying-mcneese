import React from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import addRSVP from '../../services/firebaseConfig';

class FormRSVP extends React.Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            Attending: false,
            Meal: ""
        }

        this.updateName = this.updateName.bind(this);
        this.updateAttending = this.updateAttending.bind(this);
        this.updateMeal = this.updateMeal.bind(this);
        this.submitRSVP = this.submitRSVP.bind(this);
    }

    updateName(e) {
        this.setState({Name: e.target.value});
    }

    updateAttending(e) {
        this.setState({Attending: !this.state.Attending});
    }

    updateMeal(e) {
        this.setState({Meal: e.target.value});
    }

    submitRSVP() {
        addRSVP({
            Name: this.state.Name,
            Attending: this.state.Attending,
            Meal: this.state.Meal
        });
    }    

    render() {
        return (
            <Form>
                <Form.Group controlId="formPersonName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Who are you?" value={ this.state.Name } onChange={ this.updateName }/>
                </Form.Group>
    
                <Form.Group controlId="formAttending">
                    <Form.Label>Attending</Form.Label>
                    <Form.Check type="radio" id="attendingYes" name="attending" label="Yes" value={ this.state.Attending } onChange={ this.updateAttending } />
                    <Form.Check type="radio" id="attendingNo" name="attending" label="No" value={ this.state.Attending } onChange={ this.updateAttending } />
                </Form.Group>

                <Form.Group controlId="formMeal">
                    <Form.Label>Dinner Meal</Form.Label>

                    <ListGroup>
                        <ListGroup.Item>
                            <Form.Check type="radio" id="mealChicken" name="meal" label="Chicken" value="Chicken" onChange={ this.updateMeal } />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Form.Check type="radio" id="mealSalmon" name="meal" label="Salmon" value="Salmon" onChange={ this.updateMeal } />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Form.Check type="radio" id="mealPepper" name="meal" label="Stuffed Pepper" value="Stuffed Pepper" onChange={ this.updateMeal } />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Form.Check type="radio" id="mealKids" name="meal" label="Kid's Meal" value="Kid's Meal" onChange={ this.updateMeal } />
                        </ListGroup.Item>
                    </ListGroup>

                    
                </Form.Group>
        
                <Button className="rsvpSubmitButton" onClick={ this.submitRSVP }>Submit</Button>
            </Form>
        );
    }
}

export default FormRSVP;