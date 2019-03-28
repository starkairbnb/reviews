import React from 'react';
import Review from './Review.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() { return (
    <div>
    <Review />
    <Review />
    <Review />
    <Review />
    <Review />
    <Review />
    <Review />
  </div>
  )
  }
} 

export default ReviewList;