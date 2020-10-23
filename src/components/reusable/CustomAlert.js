import React from 'react';

import Alert from 'react-bootstrap/Alert';

class CustomAlert extends React.Component {

  render() {
    return (
      <Alert variant={ this.props.variant } onClose={ () => this.props.dismissAlert() } dismissible>
        <p className="noMarginBottom">{ this.props.message }</p>
      </Alert>
    );
  }
}

export default CustomAlert;