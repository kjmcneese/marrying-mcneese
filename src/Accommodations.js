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
                    <Card.Text>Stay right by The Tinsmith (wedding venue). Rooms at about $170 per night.</Card.Text>
                    <Card.Link href={hotelIndigoBookingLink}>Book Room</Card.Link>
                </Card.Body>
            </Card>

            <Card className="hotelCard">
                <Card.Img variant="top" src={indigo} />
                <Card.Body>
                    <Card.Title>Hotel Something</Card.Title>
                    <Card.Text>Stay about 6 miles from The Tinsmith (wedding venue). Rooms at about $125 per night.</Card.Text>
                    <Card.Link href="#">Book Room</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Accommodations;