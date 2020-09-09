import React from 'react';
import ReactDOM from 'react-dom';

let getTimeUntilWedding = 0;
let beforeWeddingText = "until I Do";

class Wedding extends React.Component {
    render() {
      return (
        <div id="Wedding" className="smallText">
          <p id="timeUntilWedding">{ getTimeUntilWedding }</p>
          <p id="beforeWeddingText">{ beforeWeddingText }</p>
        </div>
      );
    }

    componentDidMount() {
      let weddingDate = new Date(this.props.weddingDate + " " + this.props.weddingTime).getTime();
      
      this.timer = setInterval(function() {
        let now = new Date().getTime();
        let difference = weddingDate - now;
          
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        let afterWeddingText = "We tied the knot!";

        if (difference < 0) {
          getTimeUntilWedding = "";
          beforeWeddingText = afterWeddingText;
          ReactDOM.render(beforeWeddingText, document.getElementById('beforeWeddingText'));
        } else {
          getTimeUntilWedding = days + " Days, " + hours + " Hours, " + minutes + ":" + seconds + " Minutes";
        }
      
        ReactDOM.render(getTimeUntilWedding, document.getElementById('timeUntilWedding'));
      }, 300);  
    }
    
    componentWillUnmount() {
      clearInterval(this.timer);
    };
}

export default Wedding;