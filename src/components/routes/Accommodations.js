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

  static accommodationsPageTitle() {
    return "Accommodations";
  }

  static accommodationsPageNotice() {
    return "We've blocked rooms at these hotels. More Coming Soon!";
  }

  componentDidMount() {
    getAccommodations().then( (results) => {
      let counter = 0;
      // needed this variable or else the state change wouldn't display the accommodations. 
      // see FormRSVP and state variable mealListGroupItems for a contrasting example that also works.
      let accommodationList = [];
      const accommodationImages = Accommodations.accommodationImages();
      results.forEach( (doc) => {
        let docData = doc.data();
        
        accommodationList.push(
          <CustomCard cardObject={ docData } cardImage={ accommodationImages[counter] } key={ docData.name } />
        );

        counter++;
      })

      this.setState( { accommodations : accommodationList } );
    });
  }

  static accommodationImages() {
    return [ indigo ];
  }

  render() {
    return (
      <div>
        <RouteTop pageTitle={ Accommodations.accommodationsPageTitle() } pageNotice={ Accommodations.accommodationsPageNotice() } />
        { this.state.accommodations }
      </div>
    );
  }
}

export default Accommodations;