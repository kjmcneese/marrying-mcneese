import React from 'react';
import RouteTop from '../reusable/RouteTop';
import Card from 'react-bootstrap/Card';
import bedbathbeyond from '../../images/bedbathbeyond.jpg';
import '../../css/Registry.scss';

var pageTitle = "Registries";
var pageNotice = "We have created registries at each of these places."
var bedBathBeyondTitle = "Bed, Bath, & Beyond";
var bedBathBeyondLink = "https://www.bedbathandbeyond.com/store/giftregistry/registry-search-guest";
var goToText = "Go to registry";

function Registry() {
    return (
        <div className="registry">
            <RouteTop pageTitle={ pageTitle } pageNotice={ pageNotice } />

            <Card>
                <Card.Img variant="top" src={bedbathbeyond}/>
                <Card.Body>
                    <Card.Title>{bedBathBeyondTitle}</Card.Title>
                    <Card.Link href={bedBathBeyondLink} target="_blank">{goToText}</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Registry;