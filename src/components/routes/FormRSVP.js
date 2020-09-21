import React from 'react';
import SmallText from '../reusable/SmallText';

import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import { getMealOptions, addRSVP } from '../../services/firebaseConfig';

class FormRSVP extends React.Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            Attending: false,
            Meal: "",
            mealListGroupItems: [],
            validated: false
        }

        this.updateName = this.updateName.bind(this);
        this.updateAttending = this.updateAttending.bind(this);
        this.updateMeal = this.updateMeal.bind(this);
        this.submitRSVP = this.submitRSVP.bind(this);
    }

    componentDidMount() {
        getMealOptions().then((results) => {
            results.forEach((doc) => {
                let docData = doc.data();
                this.state.mealListGroupItems.push(
                    <ListGroup.Item key={ docData.ShortName }>
                        <div className="formMealCheck">
                            <Form.Check type="radio" id={ docData.ShortName } name="meal" label={ docData.Name } value={ docData.ShortName } onChange={ this.updateMeal } required />
                        </div>
                        <div className="mealDescriptionSides">
                            <p className="mealDescription smallText">{ docData.Description }</p>
                            <SmallText regularText={ "Sides: " + docData.Sides } />
                        </div>
                    </ListGroup.Item>
                )
            })
            this.setState({mealListGroupItems: this.state.mealListGroupItems});
        });
    }

    updateName(e) {
        this.setState({Name: e.target.value});
    }

    updateAttending() {
        this.setState({Attending: !this.state.Attending});
    }

    updateMeal(e) {
        this.setState({Meal: e.target.value});
    }

    submitRSVP(e) {
        const form = document.getElementById("rsvpForm");
        e.preventDefault();
        if (form.checkValidity() === false) {
            e.stopPropagation();
            this.setState({validated: true});
        }
        
        if (form.checkValidity() === true) {
            this.setState({validated: false});

            addRSVP({
                Name: this.state.Name,
                Attending: this.state.Attending,
                Meal: this.state.Meal
            }).then(function(docRef) {
                form.reset();
                document.getElementById('formPersonName').value = "";
                // TODO: show Success alert
            }).catch(function(error) {
                // TODO: show Failure alert
            });
        }
    }

    render() {
        return (
            <Form id="rsvpForm" noValidate validated={ this.state.validated } onSubmit={ this.submitRSVP }>
                <Form.Group controlId="formPersonName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Who are you?" value={ this.state.Name } onChange={ this.updateName } required />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Don't forget who you are!</Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group controlId="formAttending">
                    <Form.Label>Attending</Form.Label>
                    <Form.Check type="radio" id="attendingYes" name="attending" label="Yes" value={ this.state.Attending } onChange={ this.updateAttending } required />
                    <Form.Check type="radio" id="attendingNo" name="attending" label="No" value={ this.state.Attending } onChange={ this.updateAttending } required />
                </Form.Group>

                <Form.Group controlId="formMeal">
                    <Form.Label>Dinner Meal</Form.Label>
                    <ListGroup>
                        { this.state.mealListGroupItems }
                    </ListGroup>
                </Form.Group>
        
                <Button className="rsvpSubmitButton" type="submit">Submit</Button>
            </Form>
        );
    }
}

export default FormRSVP;