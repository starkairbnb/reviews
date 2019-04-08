import React from 'react';
import Rating from './Rating.jsx';
import OverallSearch from './OverallSearch.jsx';

import ratingList from '../css/ratingList.css';

class RatingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() { //flex @ 55% width
    let { accuracy, communication, cleanliness, location, checkIn, value, average } = this.props.ratings;
    return (
  <div className={ratingList.ratingList}>
    <div>
      <OverallSearch average={average} count={this.props.count}/>
    </div>
    <div className={ratingList.ratings}>
      <span className={ratingList.column}>
        <Rating id="Accuracy" rating={accuracy}/><br/>
        <Rating id="Communication" rating={communication}/><br/>
        <Rating id="Cleanliness" rating={cleanliness}/><br/>
      </span>
      <span className={ratingList.column}>
        <Rating id="Location" rating={location}/><br/>
        <Rating id="Check-in" rating={checkIn}/><br/>
        <Rating id="Value" rating={value}/><br/>
      </span>
    </div>
  </div>
  )
  }
}

export default RatingList;