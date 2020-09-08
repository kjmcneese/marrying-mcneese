import React from 'react';
import RouteTop from '../reusable/RouteTop';
import CustomCard from '../reusable/CustomCard';
import indigo from '../../images/indigo.jpg';
import '../../css/Accommodations.scss';

let accommodations = require('../../json/accommodations.json');

class Accommodations extends React.Component {
    render() {
        const pageNotice = "We've blocked rooms at each of these hotels.";

        const accommodationImages = [indigo, indigo];
        const accommodationCards = [];        
        for (var i = 0; i < accommodations[Object.keys(accommodations)[0]].length; i++) {
            var accommodation = accommodations[Object.keys(accommodations)[0]][i];
            accommodationCards.push(<CustomCard accommodation={ accommodation } accommodationImage={ accommodationImages[i] } key={ accommodation.name } />);
        }

        return (
            <div className="accommodations">
                <RouteTop pageTitle={ Object.keys(accommodations)[0] } pageNotice={ pageNotice } />
                { accommodationCards }
            </div>
        );
    }
}

export default Accommodations;