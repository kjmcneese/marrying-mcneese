import React from 'react';
import RouteTop from '../reusable/RouteTop';
import CustomCard from '../reusable/CustomCard';
import indigo from '../../images/indigo.jpg';
import '../../css/Accommodations.scss';

let accommodations = require('../../json/accommodations.json');

const pageNotice = "We've blocked rooms at each of these hotels.";
const cardLinkText = "Book Room";

const accommodationImages = [indigo, indigo];
const accommodationCards = [];        
for (var i = 0; i < accommodations[Object.keys(accommodations)[0]].length; i++) {
    var accommodation = accommodations[Object.keys(accommodations)[0]][i];
    accommodationCards.push(<CustomCard cardObject={ accommodation } cardImage={ accommodationImages[i] } cardLinkText={ cardLinkText } key={ accommodation.name } />);
}

function Accommodations() {
    return (
        <div>
            <RouteTop pageTitle={ Object.keys(accommodations)[0] } pageNotice={ pageNotice } />
            { accommodationCards }
        </div>
    );
}

export default Accommodations;