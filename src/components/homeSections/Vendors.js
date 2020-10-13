import React from 'react';

import SmallText from '../reusable/SmallText';

import Constants from '../../Constants';

let vendors = require('../../json/vendors.json');

class Vendors extends React.Component {
  render() {
    const vendorItems = [];
    let vendor = {};
    for (vendor of vendors) {
      vendorItems.push(<SmallText linkText={ vendor.name } webLink={ vendor.link } key={ vendor.name } />);
    }

    return (
      <div>
        { vendorItems }
        <SmallText regularText={ Constants.vendorsComingSoon() } />
      </div>
    );
  }
}

export default Vendors;