import React from 'react';

import RouteTop from '../reusable/RouteTop';
import CustomCard from '../reusable/CustomCard';

import bedbathbeyond from '../../images/bedbathbeyond.jpg';

import Constants from '../../Constants';

import { getRegistries } from '../../services/firebaseConfig';

class Registry extends React.Component {
  constructor() {
    super();

    this.state = {
      registries : []
    }
  }

  componentDidMount() {
    getRegistries().then( (results) => {
      let registryList = [];
      let counter = 0;

      let docData = {};
      results.forEach( (doc) => {
        docData = doc.data();

        registryList.push(
          <CustomCard cardObject={ docData } cardImage={ Registry.registryImages()[counter] } key={ docData.name } />
        )

        counter++;
      })

      this.setState( { registries : registryList } );
    });
  }

  static registryImages() {
    return [ bedbathbeyond ];
  }

  render() {
    return (
      <div>
        <RouteTop pageTitle={ Constants.registriesPageTitle() } pageNotice={ Constants.registriesPageNotice() } />
        { this.state.registries }
      </div>
    );
  }
}

export default Registry;