import React from 'react';

import Alert from 'react-bootstrap/Alert';

function CustomAlert(props) {
  if (props.variant === "" && props.message === "") {
    return null;
  }

  const callUpdateAlert = () => {
    props.updateAlert("", "");
  }

  let closeAlertTimer = setInterval( () => {
    callUpdateAlert();
    clearInterval(closeAlertTimer);
  }, 10000);

  // Don't fully understand the syntax in the onClose '() =>' but it makes it possible to change state during render
  return (
    <Alert className="customAlert" variant={ props.variant } onClose={ callUpdateAlert } dismissible>
      <p className="noMarginBottom">{ props.message }</p>
    </Alert>
  );
}

export default CustomAlert;