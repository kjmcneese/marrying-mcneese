import React from 'react';
import Card from 'react-bootstrap/Card';
import indigo from './images/indigo.jpg';
import './css/Accommodations.css';

var pageTitle = "Hotel Accommodations";
var hotelIndigoTitle = "Hotel Indigo";
var hotelIndigoAddress = "901 E Washington Ave";
var hotelIndigoLink = "https://www.hotelindigo.com/redirect?path=asearch&brandCode=IN&localeCode=en&regionCode=1&hotelCode=MSNMS&checkInDate=12&checkInMonthYear=072021&checkOutDate=15&checkOutMonthYear=072021&rateCode=6CBARC&_PMID=99801505&GPC=VN7&cn=no&viewfullsite=true";
var madison = "Madison, WI 53703";
var bookRoom = "Book Room";


function Accommodations() {
    return (
        <div className="hotels">
            <h3>{pageTitle}</h3>
            <Card className="hotelCard">
                <Card.Img variant="top" src={indigo} />
                <Card.Body>
                    <Card.Title>{hotelIndigoTitle}</Card.Title>
                    <Card.Text className="no-margin-bottom">{hotelIndigoAddress}</Card.Text>
                    <Card.Text>{madison}</Card.Text>
                    <Card.Link href={hotelIndigoLink}>{bookRoom}</Card.Link>
                </Card.Body>
            </Card>

            <Card className="hotelCard">
                <Card.Img variant="top" src={indigo} />
                <Card.Body>
                    <Card.Title>Hotel Something</Card.Title>
                    <Card.Text className="no-margin-bottom">Address is something</Card.Text>
                    <Card.Text>{madison}</Card.Text>
                    <Card.Link href="#">{bookRoom}</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Accommodations;