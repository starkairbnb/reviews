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
    <Rating id="accuracy" rating={accuracy}/>
    <Rating id="communication" rating={communication}/>
    <Rating id="cleanliness" rating={cleanliness}/>
    <Rating id="location" rating={location}/>
    <Rating id="checkIn" rating={checkIn}/>
    <Rating id="value" rating={value}/>
  </div>
  )
  }
}

export default RatingList;