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
    <Rating id="accuracy" rating={accuracy}/><br/>
    <Rating id="communication" rating={communication}/><br/>
    <Rating id="cleanliness" rating={cleanliness}/><br/>
    <Rating id="location" rating={location}/><br/>
    <Rating id="checkIn" rating={checkIn}/><br/>
    <Rating id="value" rating={value}/><br/>
  </div>
  )
  }
}

export default RatingList;