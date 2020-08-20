import React from 'react';
import Card from 'react-bootstrap/Card';
import bedbathbeyond from './images/bedbathbeyond.jpg';
import './css/Registry.css';

var pageTitle = "Registries";
var bedBathBeyondTitle = "Bed, Bath, & Beyond";
var bedBathBeyondLink = "https://www.bedbathandbeyond.com/store/giftregistry/registry-search-guest";
var goToText = "Go to registry";

function Registry() {
    return (
        <div className="registry">
            <h3>{pageTitle}</h3>
            <Card>
                <Card.Img variant="top" src={bedbathbeyond} />
                <Card.Body>
                    <Card.Title>{bedBathBeyondTitle}</Card.Title>
                    <Card.Link href={bedBathBeyondLink}>{goToText}</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Registry;