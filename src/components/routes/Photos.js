import React from 'react';
import RouteTop from '../reusable/RouteTop';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';
import '../../css/Photos.scss';

let photos = require('../../json/photos.json');

class Photos extends React.Component {
    render() {
        const pageNotice = "Professional photography by the lovely Mo Speer";

        const proposalImageNames = photos[Object.keys(photos)[0]].Proposal;
        const proposalImages = proposalImageNames.map(proposalImageName => {
            return <Image key={ proposalImageName } src={require(`../../images/proposal/${ proposalImageName }.JPEG`)} className="photo" rounded />
        });

        const engagementImageNames = photos[Object.keys(photos)[0]].Engagement;
        const engagementImages = engagementImageNames.map(engagementImageName => {
            return <Image key={ engagementImageName } src={require(`../../images/engagement/${ engagementImageName }.jpg`)} className="photo" rounded />
        });

        const weddingImageNames = photos[Object.keys(photos)[0]].Wedding;
        const weddingImages = weddingImageNames.map(weddingImageName => {
            return <Image key={ weddingImageName } src={require(`../../images/wedding/${ weddingImageName }.JPEG`)} className="photo" rounded />
        });

        return (
            <div>
                <RouteTop pageTitle={ Object.keys(photos)[0] } pageNotice={ pageNotice } />

                <Tabs className="photos" defaultActiveKey="proposal">
                    <Tab className="photos" eventKey="proposal" title="Proposal">
                        { proposalImages }
                    </Tab>
                    <Tab className="photos" eventKey="engagement" title="Engagement">
                        { engagementImages }
                    </Tab>
                    <Tab className="photos" eventKey="wedding" title="Wedding" disabled>
                        { weddingImages }
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default Photos;