import React from 'react';
import RouteTop from '../reusable/RouteTop';
import CustomCard from '../reusable/CustomCard';
import bedbathbeyond from '../../images/bedbathbeyond.jpg';

let registries = require('../../json/registries.json');

const pageNotice = "We set up registries at each of these places.";
const cardLinkText = "Go to Registry";

const registryImages = [bedbathbeyond, bedbathbeyond];
const registryCards = [];        
for (var i = 0; i < registries[Object.keys(registries)[0]].length; i++) {
    var registry = registries[Object.keys(registries)[0]][i];
    registryCards.push(<CustomCard cardObject={ registry } cardImage={ registryImages[i] } cardLinkText={ cardLinkText } key={ registry.name } />);
}

function Registry() {
    return (
        <div>
            <RouteTop pageTitle={ Object.keys(registries)[0] } pageNotice={ pageNotice } />
            { registryCards }
        </div>
    );
}

export default Registry;