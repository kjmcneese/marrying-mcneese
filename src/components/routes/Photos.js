import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';
import '../../css/Photos.scss';

var pageTitle = "Photos";

class Photos extends React.Component {
    render() {
        const array = ["IMG_1526", "IMG_1527", "IMG_1529", "IMG_1535", "IMG_7695"];
        const images = array.map(image => {
            return <Image key={image} src={require(`../../images/proposal/${image}.JPEG`)} className="photo" rounded />
        });

        return (
            <div className="photos">
                <h3>{pageTitle}</h3>
                <Tabs defaultActiveKey="proposal">
                    <Tab eventKey="proposal" title="Proposal">
                        <div>
                            {images}
                        </div>
                    </Tab>
                    <Tab eventKey="engagement" title="Engagement" disabled>
                        Coming soon!
                    </Tab>
                    <Tab eventKey="wedding" title="Wedding" disabled>
                        Coming soon!
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default Photos;