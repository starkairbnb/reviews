import React from 'react';
import Rating from './Rating.jsx';

class RatingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() { return (
  <div>
    <Rating />
    <Rating />
    <Rating />
  </div>
  )
  }
}

export default RatingList;