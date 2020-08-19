import React from 'react';
import ReactDOM from 'react-dom';
// import wedding from './images/wedding.jpg';
import './css/Wedding.css';

var getTimeUntilWedding = 0;
var untilIDo = "until I Do";

class Wedding extends React.Component {
    render() {
        return (
            <a name="Wedding">
                <div className="anchorSection weddingSection">
                    <h3>Wedding</h3>
                    {/* <img className="homepageImage" src={wedding} /> */}
                    <p id="timeUntilWedding" className="no-margin-bottom">{getTimeUntilWedding}</p>
                    <p id="untilIDo">{untilIDo}</p>
                </div>
            </a>
        );
    }

    componentDidMount() {
        var weddingDate = new Date("August 13, 2021 15:00:00").getTime();
        
        this.timer = setInterval(function() {
          var now = new Date().getTime();
          var difference = weddingDate - now;
            
          var days = Math.floor(difference / (1000 * 60 * 60 * 24));
          var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
          if (difference < 0) {
            getTimeUntilWedding = "";
            untilIDo = "We tied the knot!";
          } else {
            getTimeUntilWedding = days + " Days, " + hours + " Hours, " + minutes + ":" + seconds + " Minutes";
          }
        
          ReactDOM.render(getTimeUntilWedding, document.getElementById('timeUntilWedding'));
          ReactDOM.render(untilIDo, document.getElementById('untilIDo'));
        }, 300);  
      }
    
      componentWillUnmount() {
        clearInterval(this.timer);
      };
}

export default Wedding;