import React from 'react';
import RouteTop from '../reusable/RouteTop';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';

let photos = require('../../json/photos.json');

class Photos extends React.Component {
    render() {
        const pageNotice = "Professional photography by the lovely Mo Speer";

        const proposalImageNames = photos[Object.keys(photos)[0]].Proposal;
        const proposalImages = proposalImageNames.map(proposalImageName => {
            return <Image key={ proposalImageName } src={require(`../../images/proposal/${ proposalImageName }.JPG`)} className="photo" rounded />
        });

        const engagementImageNames = photos[Object.keys(photos)[0]].Engagement;
        const engagementImages = engagementImageNames.map(engagementImageName => {
            return <Image key={ engagementImageName } src={require(`../../images/engagement/${ engagementImageName }.jpg`)} className="photo" rounded />
        });

        // const weddingImageNames = photos[Object.keys(photos)[0]].Wedding;
        // let weddingImages = null;
        // if (weddingImageNames.length > 0) {
        //     weddingImages = weddingImageNames.map(weddingImageName => {
        //         return <Image key={ weddingImageName } src={require(`../../images/wedding/${ weddingImageName }.JPEG`)} className="photo" rounded />
        //     });
        // }

        return (
            <div>
                <RouteTop pageTitle={ Object.keys(photos)[0] } pageNotice={ pageNotice } />

                <Tabs className="photos" defaultActiveKey="engagement">
                    <Tab className="photos" eventKey="proposal" title="Proposal">
                        { proposalImages }
                    </Tab>
                    <Tab className="photos" eventKey="engagement" title="Engagement">
                        { engagementImages }
                    </Tab>
                    {/* <Tab className="photos" eventKey="wedding" title="Wedding" disabled>
                        { weddingImages }
                    </Tab> */}
                </Tabs>
            </div>
        );
    }
}

export default Photos;