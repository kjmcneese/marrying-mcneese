import React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';

import RouteTop from '../reusable/RouteTop';
import SmallText from '../reusable/SmallText';

import Constants from '../../Constants';

let photos = require('../../json/photos.json');

class Photos extends React.Component {
  render() {
    const photographerName = "Mo Speer";
    const photographerLink = "https://www.mspeerphoto.com";

    // let proposalImages = [];
    // let proposalImageName = "";
    // for (proposalImageName of photos.Proposal) {
    //     proposalImages.push(<Image src={require(`../../images/proposal/${ proposalImageName }.JPG`)} className="photo" key={ proposalImageName } rounded />);
    // }

    let engagementImages = [];
    let engagementImageName = "";
    for (engagementImageName of photos.Engagement) {
      engagementImages.push(<Image src={require(`../../images/engagement/${ engagementImageName }.jpg`)} className="photo" key={ engagementImageName } rounded />);
    }

    // let weddingImages = [];
    // let weddingImageName = "";
    // for (weddingImageName of photos.Wedding) {
    //     weddingImages.push(<Image src={require(`../../images/wedding/${ weddingImageName }.jpg`)} className="photo" key={ weddingImageName } rounded />);
    // }

    return (
      <div>
        <RouteTop pageTitle={ Constants.photosPageTitle() } />
        <SmallText regularText={ Constants.photosPageNotice() } linkText={ photographerName } webLink={ photographerLink } />

        <Tabs className="photos" defaultActiveKey="engagement">
          {/* <Tab eventKey="proposal" title="Proposal">
            { proposalImages }
          </Tab> */}
          <Tab eventKey="engagement" title="Engagement">
            { engagementImages }
          </Tab>
          {/* <Tab eventKey="wedding" title="Wedding" disabled>
            { weddingImages }
          </Tab> */}
        </Tabs>
      </div>
    );
  }
}

export default Photos;