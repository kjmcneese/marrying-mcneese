import React from 'react';

class Countdown extends React.Component {

  constructor() {
    super();
    
    this.state = {
      timeUntilWedding : ""
    }
  }

  componentDidMount() {
    this.timer = setInterval(function() {
      let weddingDate = new Date(this.props.weddingDate + " " + this.props.weddingTime).getTime();
      let now = Date.now();
      let difference = weddingDate - now;
        
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        this.stopInterval();
        this.setState( { timeUntilWedding : "" } );
        this.props.checkCountdown();
      } else {
        this.setState( { timeUntilWedding : days + " Days, " + hours + " Hours, " + minutes + ":" + seconds + " Minutes" } );
      }
    }.bind(this), 300);  
  }
  
  componentWillUnmount() {
    this.stopInterval();
  }

  stopInterval = () => clearInterval(this.timer);

  render() {
    return (
      <div>
        { this.state.timeUntilWedding !== "" && (
          <p className="smallText">{ this.state.timeUntilWedding }</p>
        )}
      </div>
    );
  }
}

export default Countdown;