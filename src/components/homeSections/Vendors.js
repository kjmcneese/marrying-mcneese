import React from 'react';
import SmallText from '../reusable/SmallText';

let vendors = require('../../json/vendors.json');

class Vendors extends React.Component {
    render() {
        let notice = "More Coming Soon!";

        const vendorItems = [];
        for (var vendor of vendors) {
            vendorItems.push(<SmallText linkText={ vendor.name } webLink={ vendor.link } key={ vendor.name } />);
        }

        return (
            <div>
                { vendorItems }
                <SmallText regularText={ notice } />
            </div>
        );
    }
}

export default Vendors;