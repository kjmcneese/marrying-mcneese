import React from 'react';
import Card from 'react-bootstrap/Card';
import indigo from './images/indigo.jpg';
import './css/Accommodations.css';

var hotelIndigoBookingLink = "https://www.hotelindigo.com/redirect?path=asearch&brandCode=IN&localeCode=en&regionCode=1&hotelCode=MSNMS&checkInDate=12&checkInMonthYear=072021&checkOutDate=15&checkOutMonthYear=072021&rateCode=6CBARC&_PMID=99801505&GPC=VN7&cn=no&viewfullsite=true";

function Accommodations() {
    return (
        <div className="hotels">
            <h3>Hotel Accommodations</h3>
            <Card className="hotelCard">
                <Card.Img variant="top" src={indigo} />
                <Card.Body>
                    <Card.Title>Hotel Indigo</Card.Title>
                    <Card.Text className="no-margin-bottom">901 E Washington Ave</Card.Text>
                    <Card.Text>Madison, WI 53703</Card.Text>
                    <Card.Link href={hotelIndigoBookingLink}>Book Room</Card.Link>
                </Card.Body>
            </Card>

            <Card className="hotelCard">
                <Card.Img variant="top" src={indigo} />
                <Card.Body>
                    <Card.Title>Hotel Something</Card.Title>
                    <Card.Text className="no-margin-bottom">Address is something</Card.Text>
                    <Card.Text>Madison, WI 53703</Card.Text>
                    <Card.Link href="#">Book Room</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Accommodations;