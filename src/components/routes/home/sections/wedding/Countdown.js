import React from 'react';

class Countdown extends React.Component {

  constructor() {
    super();
    
    this.state = {
      timeUntilWedding : ""
    }
  }

  componentDidMount() {
    let weddingDate = new Date(this.props.weddingDate + " " + this.props.weddingTime).getTime();
    
    let self = this;
    this.timer = setInterval(function() {
      let now = Date.now();
      let difference = weddingDate - now;
        
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        self.stopInterval();
        self.setState( { timeUntilWedding : "" } );
        self.props.checkCountdown();
      } else {
        self.setState( { timeUntilWedding : days + " Days, " + hours + " Hours, " + minutes + ":" + seconds + " Minutes" } );
      }
    }, 300);  
  }
  
  componentWillUnmount() {
    this.stopInterval();
  }

  stopInterval = () => clearInterval(this.timer);

  render() {
    return (
      <div>
        { this.state.timeUntilWedding !== "" && (
          <p id="timeUntilWedding">{ this.state.timeUntilWedding }</p>
        )}
      </div>
    );
  }
}

export default Countdown;