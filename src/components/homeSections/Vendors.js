import React from 'react';

import SmallText from '../reusable/SmallText';

import Constants from '../../Constants';

import { getVendors } from '../../services/firebaseConfig';

class Vendors extends React.Component {
  constructor() {
    super();

    this.state = {
      vendors : []
    }

    this.COMING_SOON = "More " + Constants.COMING_SOON;
  }

  componentDidMount() {
    getVendors().then( (results) => {
      // needed this variable or else the state change wouldn't display the accommodations. 
      // see FormRSVP and state variable mealListGroupItems for a contrasting example that also works.
      let vendorsList = [];
      results.forEach( (doc) => {
        let docData = doc.data();
        
        vendorsList.push(
          <SmallText linkText={ docData.name } webLink={ docData.website } key={ docData.name } />
        );
      })

      this.setState( { vendors : vendorsList } );
    });
  }

  render() {
    return (
      <div>
        { this.state.vendors }
        <SmallText regularText={ this.COMING_SOON } />
      </div>
    );
  }
}

export default Vendors;