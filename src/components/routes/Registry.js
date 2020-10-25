import React from 'react';

import RouteTop from './reusable/RouteTop';
import CustomCard from '../reusable/CustomCard';

import bedbathbeyond from '../../images/bedbathbeyond.jpg';

import { getRegistries } from '../../services/firebaseConfig';

class Registry extends React.Component {

  constructor() {
    super();

    this.state = {
      registries : []
    }
  }

  static registriesPageTitle = "Registries";
  static registriesPageNotice = "We set up registries at these places.";

  componentDidMount() {
    getRegistries().then( (results) => {
      const registryImages = [ bedbathbeyond ];

      let item = {};
      this.setState({
        registries : results.docs.map( (doc, index) => {
          item = doc.data();
          return <CustomCard cardObject={ item } cardImage={ registryImages[index] } key={ item.name } />;
        })
      });
    });
  }

  render() {
    return (
      <div>
        <RouteTop pageTitle={ Registry.registriesPageTitle } pageNotice={ Registry.registriesPageNotice } />
        { this.state.registries }
      </div>
    );
  }
}

export default Registry;