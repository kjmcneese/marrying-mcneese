import React from 'react';

import RouteTop from '../reusable/RouteTop';
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

  componentDidMount() {
    getRegistries().then( (results) => {
      let registryList = [];
      const cardLinkText = Registry.cardLinkText();
      let counter = 0;

      let docData = {};
      results.forEach( (doc) => {
        docData = doc.data();

        registryList.push(
          <CustomCard cardObject={ docData } cardImage={ Registry.registryImages()[counter] } cardLinkText={ cardLinkText } key={ docData.name } />
        )

        counter++;
      })

      this.setState( { registries : registryList } );
    });
  }

  static registryImages() {
    return [ bedbathbeyond ];
  }

  static pageTitle() {
    return "Registries";
  }

  static pageNotice() {
    return "We set up registries at these places.";
  }

  static cardLinkText() {
    return "Go to Registry";
  }

  render() {
    return (
      <div>
        <RouteTop pageTitle={ Registry.pageTitle() } pageNotice={ Registry.pageNotice() } />
        { this.state.registries }
      </div>
    );
  }
}

export default Registry;