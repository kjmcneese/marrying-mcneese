import React from 'react';
import RouteTop from '../reusable/RouteTop';
import CustomCard from '../reusable/CustomCard';
import bedbathbeyond from '../../images/bedbathbeyond.jpg';

let registries = require('../../json/registries.json');

const pageTitle = "Registries";
const pageNotice = "We set up registries at these places.";
const cardLinkText = "Go to Registry";

const registryImages = [bedbathbeyond];
let registryCards = [];
for (let registry of registries.entries()) {
    registryCards.push(<CustomCard cardObject={ registry[1] } cardImage={ registryImages[registry[0]] } cardLinkText={ cardLinkText } key={ registry[1].name } />);
}

function Registry() {
    return (
        <div>
            <RouteTop pageTitle={ pageTitle } pageNotice={ pageNotice } />
            { registryCards }
        </div>
    );
}

export default Registry;