import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../css/CustomCard.scss';

let appData = require('../../json/appData.json');

class CustomCard extends React.Component {
    render() {
        const bookRoom = "Book Room";
        return (
            <div className="accommodations">
                <Card>
                    <Card.Img variant="top" src={ this.props.accommodationImage } />
                    <Card.Body>
                        <Card.Title>{ this.props.accommodation.name }</Card.Title>
                        <Card.Link href={ this.props.accommodation.addressLink } className="addressLinkText" target="_blank">
                            { this.props.accommodation.address }
                            <br/>
                            { appData.city }
                        </Card.Link>
                        <Card.Link href={ this.props.accommodation.bookingLink } className="test" target="_blank">{ bookRoom }</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default CustomCard;