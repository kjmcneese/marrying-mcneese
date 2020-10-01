import React from 'react';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { getMealOptions, addRSVP } from '../../services/firebaseConfig';

class FormRSVP extends React.Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            Attending: false,
            Meal: "",
            mealListGroupItems: [],
            validated: false,
            submitSuccess: ""
        }

        this.updateName = this.updateName.bind(this);
        this.updateAttending = this.updateAttending.bind(this);
        this.updateMeal = this.updateMeal.bind(this);
        this.submitRSVP = this.submitRSVP.bind(this);
        this.dismissAlert = this.dismissAlert.bind(this);
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
                        <div className="mealDescriptionSides smallText">
                            <p className="noMarginBottom">{ docData.Description }</p>
                            { docData.Sides && ( <p className="noMarginBottom">Sides: { docData.Sides }</p> ) }
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

    updateAttending(e) {
        this.setState({Attending: e.target.checked});
    }

    updateMeal(e) {
        this.setState({Meal: e.target.value});
    }

    submitRSVP(e) {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
            e.stopPropagation();
            this.setState({validated: true});
        }
        
        if (form.checkValidity() === true) {
            this.setState({validated: false});
            let self = this;

            addRSVP({
                Name: this.state.Name,
                Attending: this.state.Attending,
                Meal: this.state.Meal
            }).then(function() {
                form.reset();

                self.setState({
                    Name: "",
                    Attending: false,
                    submitSuccess: "success"
                });

                self.closeAlertTimer = setInterval(function() {
                    self.setState({submitSuccess: ""});
                    clearInterval(self.closeAlertTimer);
                }, 10000);
            }).catch(function() {
                self.setState({
                    submitSuccess: "failure"
                });
                
                self.closeAlertTimer = setInterval(function() {
                    self.setState({submitSuccess: ""});
                    clearInterval(self.closeAlertTimer);
                }, 10000);
            });
        }
    }

    dismissAlert() {
        this.setState({submitSuccess: ""});
    }

    render() {
        return (
            <Form id="rsvpForm" noValidate validated={ this.state.validated } onSubmit={ this.submitRSVP }>
                { this.state.submitSuccess === "success" && (
                    <Alert variant="success" onClose={ this.dismissAlert } dismissible>
                        <p className="noMarginBottom">Your RSVP has been saved!</p>
                    </Alert>
                )}
                { this.state.submitSuccess === "failure" && (
                    <Alert variant="danger" onClose={ this.dismissAlert } dismissible>
                        <p className="noMarginBottom">Uh oh! There was an issue saving your RSVP.</p>
                    </Alert>
                )}

                <Form.Group controlId="formPersonName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Who are you?" value={ this.state.Name } onChange={ this.updateName } required />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Don't forget who you are!</Form.Control.Feedback>
                </Form.Group>
    
                <Form.Group controlId="formAttending">
                    <Form.Check label="Attending" feedback="Check if attending." onChange={ this.updateAttending } />
                </Form.Group>

                { this.state.Attending && (
                    <Form.Group controlId="formMeal" >
                        <Form.Label>Dinner Meal</Form.Label>
                        <ListGroup>
                            { this.state.mealListGroupItems }
                        </ListGroup>
                    </Form.Group>
                )}
        
                <Button className="rsvpSubmitButton" type="submit">Submit</Button>
            </Form>
        );
    }
}

export default FormRSVP;