import React from 'react';
import SmallText from '../reusable/SmallText';

let vendors = require('../../json/vendors.json');

class Vendors extends React.Component {
    render() {
        const vendorItems = [];
        for (var vendor of vendors["Vendors"]) {
            vendorItems.push(<SmallText linkText={ vendor.name } webLink={ vendor.link } key={ vendor.name } />);
        }

        return (
            <div>
                { vendorItems }
            </div>
        );
    }
}

export default Vendors;