import React from 'react';
import RouteTop from '../reusable/RouteTop';
import SmallText from '../reusable/SmallText';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';

let photos = require('../../json/photos.json');

class Photos extends React.Component {
    render() {
        const pageNotice = "Professional photography by the lovely ";
        const photographerName = "Mo Speer";
        const photographerLink = "https://www.mspeerphoto.com";

        // let proposalImages = [];
        // for (let proposalImageName of photos.Proposal) {
        //     proposalImages.push(<Image src={require(`../../images/proposal/${ proposalImageName }.JPG`)} className="photo" key={ proposalImageName } rounded />);
        // }

        let engagementImages = [];
        for (let engagementImageName of photos.Engagement) {
            engagementImages.push(<Image src={require(`../../images/engagement/${ engagementImageName }.jpg`)} className="photo" key={ engagementImageName } rounded />);
        }

        // let weddingImages = [];
        // for (let weddingImageName of photos.Wedding) {
        //     weddingImages.push(<Image src={require(`../../images/wedding/${ weddingImageName }.jpg`)} className="photo" key={ weddingImageName } rounded />);
        // }

        return (
            <div>
                <RouteTop pageTitle={ Object.keys(photos)[0] } />
                <SmallText regularText={ pageNotice } linkText={ photographerName } webLink={ photographerLink } />

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