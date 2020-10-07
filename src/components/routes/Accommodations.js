import React from 'react';
import RouteTop from '../reusable/RouteTop';
import CustomCard from '../reusable/CustomCard';
import indigo from '../../images/indigo.jpg';

const accommodations = require('../../json/accommodations.json');

const pageTitle = "Accommodations";
const pageNotice = "We've blocked rooms at these hotels. More Coming Soon!";
const cardLinkText = "Book Room";

const accommodationImages = [indigo];
let accommodationCards = [];
for (let accommodation of accommodations.entries()) {
    accommodationCards.push(<CustomCard cardObject={ accommodation[1] } cardImage={ accommodationImages[accommodation[0]] } cardLinkText={ cardLinkText } key={ accommodation[1].name } />);
}

function Accommodations() {
    return (
        <div>
            <RouteTop pageTitle={ pageTitle } pageNotice={ pageNotice } />
            { accommodationCards }
        </div>
    );
}

export default Accommodations;