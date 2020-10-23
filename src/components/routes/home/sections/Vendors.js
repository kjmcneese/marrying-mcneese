import React from 'react';

import SmallText from '../../../reusable/SmallText';

import Constants from '../../../../Constants';

import { getVendors } from '../../../../services/firebaseConfig';

class Vendors extends React.Component {
  constructor() {
    super();

    this.state = {
      vendors : []
    }
  }

  static comingSoon = "More " + Constants.COMING_SOON;

  componentDidMount() {
    getVendors().then( (results) => {
      let item = {};
      this.setState({
        vendors : results.docs.map( doc => {
          item = doc.data();
          return <SmallText linkText={ item.name } webLink={ item.website } key={ item.name } />;
        })
      });
    })
  }

  render() {
    return (
      <div>
        { this.state.vendors }
        <SmallText regularText={ Vendors.comingSoon } />
      </div>
    );
  }
}

export default Vendors;