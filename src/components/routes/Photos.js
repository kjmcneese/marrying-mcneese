import React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';

import RouteTop from './reusable/RouteTop';

let photos = require('../../json/photos.json');

class Photos extends React.Component {

  static photosPageTitle = "Photos";
  static photosPageNotice = "Professional photography by the lovely ";
  static photographerName = "Mo Speer";
  static photographerLink = "https://www.mspeerphoto.com";

  getProposalPhotos() {
    return photos.Proposal.map( proposalImageName => <Image src={require(`../../images/proposal/${ proposalImageName }.JPG`)} className="photo" key={ proposalImageName } rounded />);
  }

  getEngagementPhotos() {
    return photos.Engagement.map( engagementImageName => <Image src={require(`../../images/engagement/${ engagementImageName }.jpg`)} className="photo" key={ engagementImageName } rounded />);
  }

  getWeddingPhotos() {
    return photos.Wedding.map( weddingImageName => <Image src={require(`../../images/wedding/${ weddingImageName }.jpg`)} className="photo" key={ weddingImageName } rounded />);
  }

  render() {
    return (
      <div>
        <RouteTop pageTitle={ Photos.photosPageTitle } />
        <div className="smallText">
          { Photos.photosPageNotice }
          <a href={ Photos.photographerLink } className="regularLinkText">{ Photos.photographerName }</a>
        </div>

        <Tabs className="photos" defaultActiveKey="engagement">
          <Tab eventKey="proposal" title="Proposal">
            { this.getProposalPhotos() }
          </Tab>
          <Tab eventKey="engagement" title="Engagement">
            { this.getEngagementPhotos() }
          </Tab>
          <Tab eventKey="wedding" title="Wedding">
            { this.getWeddingPhotos() }
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Photos;