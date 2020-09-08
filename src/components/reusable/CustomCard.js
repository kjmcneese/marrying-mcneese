import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../css/CustomCard.scss';

let city = require('../../json/appData.json').city;

class CustomCard extends React.Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={ this.props.cardImage } />
                <Card.Body>
                    <Card.Title>{ this.props.cardObject.name }</Card.Title>
                    <Card.Link href={ this.props.cardObject.addressLink } className={ this.props.cardObject.address ? "addressLinkText" : "hideCity" } target="_blank">
                        { this.props.cardObject.address }
                        <br/>
                        { city }
                    </Card.Link>
                    <Card.Link href={ this.props.cardObject.websiteLink } className="test" target="_blank">{ this.props.cardLinkText }</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}

export default CustomCard;