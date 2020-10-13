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

  componentDidMount() {
    getAccommodations().then( (results) => {
      let counter = 0;
      // needed this variable or else the state change wouldn't display the accommodations. 
      // see FormRSVP and state variable mealListGroupItems for a contrasting example that also works.
      let accommodationList = [];
      const cardLinkText = Accommodations.cardLinkText();
      const accommodationImages = Accommodations.accommodationImages();
      results.forEach( (doc) => {
        let docData = doc.data();
        
        accommodationList.push(
          <CustomCard cardObject={ docData } cardImage={ accommodationImages[counter] } cardLinkText={ cardLinkText } key={ docData.name } />
        );

        counter++;
      })

      this.setState( { accommodations : accommodationList } );
    });
  }

  static accommodationImages() {
    return [ indigo ];
  }

  static pageTitle() {
    return "Accommodations";
  }

  static pageNotice() {
    return "We've blocked rooms at these hotels. More Coming Soon!";
  }

  static cardLinkText() {
    return "Book Room";
  }

  render() {
    return (
      <div>
        <RouteTop pageTitle={ Accommodations.pageTitle() } pageNotice={ Accommodations.pageNotice() } />
        { this.state.accommodations }
      </div>
    );
  }
}

export default Accommodations;