import React from 'react';
import Card from 'react-bootstrap/Card';
import indigo from '../images/indigo.jpg';
import '../css/Accommodations.css';

var pageTitle = "Hotel Accommodations";
var pageNotice = "We've blocked rooms at each of these hotels.";
var hotelIndigoTitle = "Hotel Indigo";
var hotelIndigoAddressLink = "https://www.google.com/maps/place/Hotel+Indigo+Madison+Downtown/@43.0811185,-89.3739437,17.99z/data=!4m8!3m7!1s0x88065371efc3958f:0x9fad468f46bdeb58!5m2!4m1!1i2!8m2!3d43.0822134!4d-89.3727458";
var hotelIndigoAddress = "901 E Washington Ave";
var hotelIndigoLink = "https://www.hotelindigo.com/redirect?path=asearch&brandCode=IN&localeCode=en&regionCode=1&hotelCode=MSNMS&checkInDate=12&checkInMonthYear=072021&checkOutDate=15&checkOutMonthYear=072021&rateCode=6CBARC&_PMID=99801505&GPC=VN7&cn=no&viewfullsite=true";
var madison = "Madison, WI 53703";
var bookRoom = "Book Room";

function Accommodations() {
    return (
        <div className="hotels">
            <h3>{pageTitle}</h3>
            <p>{pageNotice}</p>
            <Card>
                <Card.Img variant="top" src={indigo} />
                <Card.Body>
                    <Card.Title>{hotelIndigoTitle}</Card.Title>
                    <Card.Link href={hotelIndigoAddressLink} className="addressLinkText" target="_blank">
                        {hotelIndigoAddress}
                        <br/>
                        {madison}
                    </Card.Link>
                    <Card.Link href={hotelIndigoLink} className="test" target="_blank">{bookRoom}</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Accommodations;