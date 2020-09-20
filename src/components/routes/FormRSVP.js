import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormRSVP() {
    return (
        <Form>
            <Form.Group controlId="formPersonName">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formAttending">
                <Form.Label>Attending</Form.Label>
                <Form.Check type="radio" id="attendingYes" name="attending" label="Yes" value={ 1 } />
                <Form.Check type="radio" id="attendingNo" name="attending" label="No" value={ 0 } />
            </Form.Group>


            {/* <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            <Button className="rsvpSubmitButton" type="submit" disabled>Submit</Button>
        </Form>
    );
}

export default FormRSVP;