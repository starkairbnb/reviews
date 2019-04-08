import React from 'react';
import Rating from './Rating.jsx';
import OverallSearch from './OverallSearch.jsx';
import ratingList from '../css/ratingList.css';
import app from '../css/app.css';

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
    <div className={app.border}>
      <div className={app.borderLine}/>
    </div>
    <div className={ratingList.ratings}>
      <div className={ratingList.column}>
        <span>
          <Rating id="Accuracy" rating={accuracy}/>
          <Rating id="Communication" rating={communication}/>
          <Rating id="Cleanliness" rating={cleanliness}/>
        </span>
      </div>
      <div className={ratingList.column}>
        <span style={{paddingLeft: 16 + "px"}}>
          <Rating id="Location" rating={location}/>
          <Rating id="Check-in" rating={checkIn}/>
          <Rating id="Value" rating={value}/>
        </span>
      </div>
    </div>
  </div>
  )
  }
}

export default RatingList;