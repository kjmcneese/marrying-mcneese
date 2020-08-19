import React from 'react';
import Form from 'react-bootstrap/Form';
import './css/Schedule.css';

function Schedule() {
    return (
        <div className="anchorSection">
            <a name="Schedule">
                <h3>Schedule</h3>
            </a>

            <Form>
                <Form.Group controlId="scheduleForm">
                    <Form.Text>Ceremony 3:30 pm</Form.Text>
                    <Form.Text>Cocktail Hour 4:15 pm</Form.Text>
                    <Form.Text>Dinner 5:30 pm</Form.Text>
                    <Form.Text>First Dance 7 pm</Form.Text>
                    <Form.Text className="smallFont">* all events take place at the <a href="#Tinsmith">Tinsmith</a></Form.Text>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Schedule;


        
