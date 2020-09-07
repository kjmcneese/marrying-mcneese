import React from 'react';
import ReactDOM from 'react-dom';
// import wedding from './images/wedding.jpg';
import '../../css/Wedding.scss';

var sectionTitle = "Wedding";
var getTimeUntilWedding = 0;
var weddingTime = " 15:30:00";
var beforeWeddingText = "until I Do";
var afterWeddingText = "We tied the knot!";

class Wedding extends React.Component {
    render() {
      return (
        <div id="Wedding">
          <div className="anchorSection weddingSection">
            <h3>{sectionTitle}</h3>
            {/* <img className="homepageImage" src={wedding} /> */}
            <p id="timeUntilWedding" className="no-margin-bottom">{getTimeUntilWedding}</p>
            <p id="beforeWeddingText">{beforeWeddingText}</p>
          </div>
        </div>
      );
    }

    componentDidMount() {
      var weddingDate = new Date(this.props.weddingDate + weddingTime).getTime();
      
      this.timer = setInterval(function() {
        var now = new Date().getTime();
        var difference = weddingDate - now;
          
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);
          
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