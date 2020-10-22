import React from 'react';

class Wedding extends React.Component {

  constructor() {
    super();
    
    this.state = {
      timeUntilWedding : "",
      weddingText : "until I Do"
    }
  }

  static tiedTheKnot = "We tied the knot!";

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
        self.setState({ 
          timeUntilWedding : "",
          weddingText : Wedding.tiedTheKnot
        });
      } else {
        self.setState( { timeUntilWedding : days + " Days, " + hours + " Hours, " + minutes + ":" + seconds + " Minutes" } );
      }
    }, 300);  
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="smallText">
        { this.state.timeUntilWedding !== "" && (
          <p id="timeUntilWedding">{ this.state.timeUntilWedding }</p>
        )}
        <p id="weddingText">{ this.state.weddingText }</p>
      </div>
    );
  }
}

export default Wedding;