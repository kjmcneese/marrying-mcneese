import React from 'react';

import Alert from 'react-bootstrap/Alert';

function CustomAlert(props) {
  if (props.alert === "" && props.message === "") {
    return null;
  }

  return (
    <Alert className="customAlert" variant={ props.variant } onClose={ () => props.dismissAlert() } dismissible>
      <p className="noMarginBottom">{ props.message }</p>
    </Alert>
  )
}

export default CustomAlert;