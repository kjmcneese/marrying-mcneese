import React from 'react';
import Form from 'react-bootstrap/Form';
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
        this.submitRSVP = this.submitRSVP.bind(this);
    }

    updateName(e) {
        this.setState({Name: e.target.value});
    }

    updateAttending(e) {
        this.setState({Attending: !this.state.Attending});
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
                    <Form.Control placeholder="Enter name" value={ this.state.Name } onChange={ this.updateName }/>
                </Form.Group>
    
                <Form.Group controlId="formAttending">
                    <Form.Label>Attending</Form.Label>
                    <Form.Check type="radio" id="attendingYes" name="attending" label="Yes" value={ this.state.Attending } onChange={ this.updateAttending } />
                    <Form.Check type="radio" id="attendingNo" name="attending" label="No" value={ this.state.Attending } onChange={ this.updateAttending } />
                </Form.Group>
    
    
                {/* <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
    
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
    
                <Button className="rsvpSubmitButton" onClick={ this.submitRSVP }>Submit</Button>
            </Form>
        );
    }
}

export default FormRSVP;