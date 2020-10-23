import React from 'react';

import Countdown from './wedding/Countdown';

class Wedding extends React.Component {

  constructor() {
    super();
    
    this.state = {
      weddingText : "until I Do"
    }

    this.checkCountdown = this.checkCountdown.bind(this);
  }

  static tiedTheKnot = "We tied the knot!";

  checkCountdown() {
    this.setState( { weddingText : Wedding.tiedTheKnot } );
  }

  render() {
    return (
      <div className="smallText">
        <Countdown weddingDate={ this.props.weddingDate } weddingTime={ this.props.weddingTime } checkCountdown={ this.checkCountdown } />
        <p id="weddingText">{ this.state.weddingText }</p>
      </div>
    );
  }
}

export default Wedding;