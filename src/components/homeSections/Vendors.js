import React from 'react';

import SmallText from '../reusable/SmallText';

import Constants from '../../Constants';

let vendors = require('../../json/vendors.json');

class Vendors extends React.Component {
  constructor() {
    super();

    this.COMING_SOON = "More " + Constants.COMING_SOON;
  }

  render() {
    const vendorItems = [];
    let vendor = {};
    for (vendor of vendors) {
      vendorItems.push(<SmallText linkText={ vendor.name } webLink={ vendor.link } key={ vendor.name } />);
    }

    return (
      <div>
        { vendorItems }
        <SmallText regularText={ this.COMING_SOON } />
      </div>
    );
  }
}

export default Vendors;