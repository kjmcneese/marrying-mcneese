import React from 'react';

import RouteTop from '../reusable/RouteTop';
import CustomCard from '../reusable/CustomCard';

import indigo from '../../images/indigo.jpg';

import { getAccommodations } from '../../services/firebaseConfig';

class Accommodations extends React.Component {
  constructor() {
    super();
    
    this.state = {
      accommodations : []
    }
  }
  
  static accommodationsPageTitle = "Accommodations";
  static accommodationsPageNotice = "We've blocked rooms at these hotels. More Coming Soon!";

  componentDidMount() {
    getAccommodations().then( (results) => {
      const accommodationImages = [ indigo ];

      let item = {};
      this.setState({
        accommodations : results.docs.map( (doc, index) => {
          item = doc.data();
          return <CustomCard cardObject={ item } cardImage={ accommodationImages[index] } key={ item.name } />;
        })
      });
    });
  }

  render() {
    return (
      <div>
        <RouteTop pageTitle={ Accommodations.accommodationsPageTitle } pageNotice={ Accommodations.accommodationsPageNotice } />
        { this.state.accommodations }
      </div>
    );
  }
}

export default Accommodations;