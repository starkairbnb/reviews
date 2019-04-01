import React from 'react';
import Rating from './Rating.jsx';

class RatingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() { 
    let { accuracy, communication, cleanliness, location, checkIn, value, average } = this.props.ratings;
    return (
  <div>
    <Rating id="Accuracy" rating={accuracy}/><br/>
    <Rating id="Communication" rating={communication}/><br/>
    <Rating id="Cleanliness" rating={cleanliness}/><br/>
    <Rating id="Location" rating={location}/><br/>
    <Rating id="Check-in" rating={checkIn}/><br/>
    <Rating id="Value" rating={value}/><br/>
  </div>
  )
  }
}

export default RatingList;