import React from 'react';

import Card from 'react-bootstrap/Card';

import Constants from '../../Constants';

class CustomCard extends React.Component {

  render() {
    return (
      <Card>
        <Card.Img variant="top" src={ this.props.cardImage } />
        <Card.Body>
          <Card.Title>{ this.props.cardObject.name }</Card.Title>
          <Card.Link href={ this.props.cardObject.addressLink } className={ this.props.cardObject.address ? "addressLinkText" : "hideCity" } target="_blank">
            { this.props.cardObject.address }
            <br/>
            { this.props.cardObject.addressCity }
          </Card.Link>
          <Card.Link href={ this.props.cardObject.website } target="_blank">{ Constants.GO_TEXT }</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default CustomCard;