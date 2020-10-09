import React from 'react';
import RouteTop from '../reusable/RouteTop';
import CustomCard from '../reusable/CustomCard';
import indigo from '../../images/indigo.jpg';

import { getAccommodations } from '../../services/firebaseConfig';

class Accommodations extends React.Component {
  constructor() {
    super();
    
    this.state = {
      pageTitle : "Accommodations",
      pageNotice : "We've blocked rooms at these hotels. More Coming Soon!",
      cardLinkText : "Book Room",
      accommodations : [],
      accommodationImages : [ indigo ]
    }
  }

  componentDidMount() {
    getAccommodations().then( (results) => {
      let counter = 0;
      // needed this variable or else the state change wouldn't display the accommodations. 
      // see FormRSVP and state variable mealListGroupItems for a contrasting example that also works.
      let accommodationList = [];
      results.forEach( (doc) => {
        let docData = doc.data();
        
        accommodationList.push(
          <CustomCard cardObject={ docData } cardImage={ this.state.accommodationImages[counter] } cardLinkText={ this.state.cardLinkText } key={ docData.name } />
        );

        counter++;
      })

      this.setState( { accommodations : accommodationList } );
    });
  }

  render() {
    return (
      <div>
        <RouteTop pageTitle={ this.state.pageTitle } pageNotice={ this.state.pageNotice } />
        { this.state.accommodations }
      </div>
    );
  }
}

export default Accommodations;