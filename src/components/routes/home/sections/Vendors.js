import React from 'react';

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
          return <a href={ item.website } className="smallText regularLinkText blockLinkText" key={ item.name }>{ item.name }</a>;
        })
      });
    })
  }

  render() {
    return (
      <div className="smallText">
        { this.state.vendors }
        <div>{ Vendors.comingSoon }</div>
      </div>
    );
  }
}

export default Vendors;